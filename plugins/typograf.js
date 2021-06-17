import Typograf from 'typograf'

export default (_app, inject) => {
  const typograf = new Typograf({
    locale: ['ru', 'en-US']
  })

  inject('typograf', typograf.execute.bind(typograf))
}
