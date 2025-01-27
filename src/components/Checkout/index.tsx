import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/checkout'
import * as Yup from 'yup'
import {
  CheckoutContainer,
  InputGroup,
  Overlay,
  Row,
  Sidebar,
  Title
} from './styles'
import { usePurchaseMutation } from '../../services/api'
import { useEffect, useState } from 'react'
import { clear, open } from '../../store/reducers/cart'
import { FormikErrors, useFormik } from 'formik'
import { formatToBRLCurrency } from '../../utils/formatToBRLCurrency'
import Button from '../Button'
import InputMask from 'react-input-mask'

const Checkout = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const [purchase, { isLoading, isSuccess, data, reset }] =
    usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [firstForm, setFirstForm] = useState(true)

  const closeCheckout = () => {
    setFirstForm(true)
    dispatch(close())
    form.resetForm()
    reset()
  }

  const backToCart = () => {
    closeCheckout()
    dispatch(open())
  }

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(5, 'O nome precisa ter pelo menos 5 caracteres')
      .required('O nome é obrigatório'),
    address: Yup.string().required('O endereço é obrigatório'),
    city: Yup.string().required('A cidade é obrigatória'),
    cep: Yup.string().required('O CEP é obrigatório'),
    number: Yup.string().required('O número é obrigatório'),
    complement: Yup.string(),
    cardOwner: Yup.string().when([], (_, schema) =>
      schema.required('O nome do titular é obrigatório')
    ),
    cardnumber: Yup.string().required('O número do cartão é obrigatório'),
    cardCode: Yup.string()
      .matches(/^\d{3}$/, 'Código de segurança inválido')
      .required('O código de segurança é obrigatório'),
    expiresMonth: Yup.string().required('O mês de vencimento é obrigatório'),
    expiresYear: Yup.string().required('O ano de vencimento é obrigatório')
  })

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',

      cardOwner: '',
      cardnumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema,
    onSubmit: (values) => {
      purchase({
        delivery: {
          address: {
            zipCode: values.cep,
            city: values.city,
            description: values.address,
            number: Number(values.number),
            complement: values.complement
          },
          receiver: values.fullName
        },
        payment: {
          card: {
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            },
            name: values.cardOwner,
            number: values.cardnumber
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
      setFirstForm(true)
    }
  }, [isSuccess, dispatch])

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const getTotalPrice = () => {
    return items.reduce((sum, actualValue) => {
      return (sum += actualValue.preco)
    }, 0)
  }

  const validateFirstFormFields = async () => {
    const firstFormFields: (keyof typeof form.values)[] = [
      'fullName',
      'address',
      'city',
      'cep',
      'number'
    ]

    const errors = await form.validateForm()
    const formErrors = errors as FormikErrors<typeof form.values>
    const hasErrors = firstFormFields.some((field) => formErrors[field])

    if (!hasErrors) {
      setFirstForm(false)
    } else {
      firstFormFields.forEach((field) => form.setFieldTouched(field, true))
    }
  }

  return (
    <CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCheckout} />
      <Sidebar>
        {isSuccess && data ? (
          <div className="sucess-container">
            <Title>Pedido realizado - {data.orderId}</Title>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button
              title="Clique aqui para concluir"
              type="button"
              color="secundary"
              large
              onClick={closeCheckout}
            >
              Concluir
            </Button>
          </div>
        ) : (
          <form>
            <div className={firstForm ? '' : 'hidden'}>
              <Title>Entrega</Title>
              <Row>
                <InputGroup>
                  <label htmlFor="fullName">Quem irá receber?</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('address') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="fullName">CEP</label>
                  <InputMask
                    type="text"
                    id="cep"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cep') ? 'error' : ''}
                    mask="99999-999"
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="fullName">Número</label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <Row marginBottom>
                <InputGroup>
                  <label htmlFor="city">Complemento (opcional)</label>
                  <input
                    type="text"
                    id="complement"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('complement') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <Row>
                <Button
                  title="Clique aqui para seção de pagamento"
                  type="button"
                  color="secundary"
                  large
                  onClick={validateFirstFormFields}
                >
                  Continuar com pagamento
                </Button>
              </Row>
              <Row>
                <Button
                  title="Clique aqui para voltar"
                  type="button"
                  color="secundary"
                  large
                  onClick={backToCart}
                >
                  Voltar para o carrinho
                </Button>
              </Row>
            </div>
            <div className={!firstForm ? '' : 'hidden'}>
              <Title>
                Pagamento - Valor a pagar {formatToBRLCurrency(getTotalPrice())}
              </Title>
              <Row>
                <InputGroup>
                  <label htmlFor="cardOwner">Nome no cartão</label>
                  <input
                    type="text"
                    id="cardOwner"
                    name="cardOwner"
                    value={form.values.cardOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardOwner') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="cardnumber">Número do cartão</label>
                  <InputMask
                    type="text"
                    id="cardnumber"
                    name="cardnumber"
                    value={form.values.cardnumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardnumber') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </InputGroup>
                <InputGroup maxWidth="87px">
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    type="text"
                    id="cardCode"
                    name="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                    mask="999"
                  />
                </InputGroup>
              </Row>
              <Row marginBottom>
                <InputGroup>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <InputMask
                    type="text"
                    id="expiresMonth"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                    mask="99"
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <InputMask
                    type="text"
                    id="expiresYear"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                    mask="99"
                  />
                </InputGroup>
              </Row>
              <Row>
                <Button
                  title="Clique aqui para seção de pagamento"
                  type="button"
                  color="secundary"
                  large
                  onClick={form.handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? 'Finalizando compra...' : 'Finalizar pagamento'}
                </Button>
              </Row>
              <Row>
                <Button
                  title="Clique aqui para voltar"
                  type="button"
                  color="secundary"
                  large
                  onClick={() => setFirstForm(true)}
                >
                  Voltar para edição de endereço
                </Button>
              </Row>
            </div>
          </form>
        )}
      </Sidebar>
    </CheckoutContainer>
  )
}

export default Checkout
