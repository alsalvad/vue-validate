export default {
  en: {
    rules: {
      required: 'This field is required',
      numeric: 'This field must be numeric',
      email: 'This field must be a valid e-mail',
      notSpecial: 'This field not accept special characters',
      min: {
        text: 'This field must be at least :min characters',
        textarea: 'This field must be at least :min characters',
        select: 'This field must be at least :min items selected',
        checkbox: 'This field must be at least :min items selected',
        number: 'This field must be at least :min',
        file: 'The file must be at least :min kb',
      },
      max: {
        text: 'This field must not have more than :max characters',
        textarea: 'This field must not have more than :max characters',
        checkbox: 'This field must not have more than :max items selected',
        select: 'This field must not have more than :max items selected',
        number: 'This field must not have more than :max',
        file: 'The file must not be greater than :max kb',
      },
      file: 'This field must be a file',
      image: 'This field must be a image',
      mimes: 'This field must be a file of type :types'
    },
    noneSelectedText: 'None selected',
    selectedItems: 'selected items',
    searchPlaceholder: 'Search...',
    checkAll: 'Check All',
    uncheckAll: 'Uncheck All',
  },
  pt_BR: {
    rules: {
      required: 'Este campo é obrigatório',
      numeric: 'Este campo deve ser numérico',
      email: 'Informe um e-mail válido',
      notSpecial: 'Este campo não aceita caracteres especiais',
      min: {
        text: 'Este campo deve conter, pelo menos, :min caracteres',
        textarea: 'Este campo deve conter, pelo menos, :min caracteres',
        checkbox: 'Selecione, pelo menos, :min itens',
        select: 'Selecione, pelo menos, :min itens',
        number: 'Este campo deve ser maior ou igual a :min',
        file: 'O arquivo não pode ser superior a :min kb',
      },
      max: {
        text: 'Este campo não deve conter mais que :max caracteres',
        textarea: 'Este campo não deve conter mais que :max caracteres',
        checkbox: 'Selecione no máximo :max itens',
        select: 'Selecione no máximo :max itens',
        number: 'Este campo não pode ser maior que :max',
        file: 'O arquivo deve ter no máximo :max kb',
      },
      file: 'Este campo deve ser um arquivo',
      image: 'Este campo deve ser uma imagem',
      mimes: 'Somente arquivos do tipo :types'
    },
    noneSelectedText: 'Nenhum valor selecionado',
    selectedItems: 'itens selecionados',
    searchPlaceholder: 'Pesquisar...',
    checkAll: 'Marcar todos',
    uncheckAll: 'Desmarcar todos',
  }
};