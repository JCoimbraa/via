class Locators {

    menu = () => { return 'ul#primary-menu' }
    
    nome = () => { return '#nf-field-5' }
    sobrenome = () => { return 'input#nf-field-6' }
    email = () => { return 'input#nf-field-7' }
    repetirEmail = () => { return 'input#nf-field-8' }
    idade = () => { return 'input#nf-field-10-0' }
    experiencia = () => { return '#nf-field-11' }
    motivo = () => { return '#nf-field-12' }
    melhorar = () => { return '#nf-label-class-field-13-1' }
    liguegemProgramacao = () => { return '[placeholder="Ex.: c#, Js, java, Ruby, Python, etc"]'}

    btnEnviar = () => { return '#nf-field-16'}
    sucesso = () => { return 'article#post-2'}

}

export default Locators;