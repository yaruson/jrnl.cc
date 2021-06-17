import marked from 'marked'

export default (_app, inject) => {
  inject('marked', marked)
}
