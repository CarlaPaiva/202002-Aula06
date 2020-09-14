//#region Unidades de Medidas
export enum Unidade_De_Medida{
    Balde = "Balde",
    Barra = "Barra",
    Bloco = "Bloco",
    Cento = "Cento",
    CM = "Centímetro",
    CX = "Caixa",
    Fardo = "Fardo",
    Galao = "Galão",
    Gramas = "Gramas",
    Kg = "Kilogramas",
    Litro = "Litro",
    M = "Metro",
    Milhei = "Milheiro",
    ML = "Mililitro",
    PCT = "Pacote",
    PC = "Peça",
    Unid = "Unidade"
}
//#endregion

export class Produto{
    private Codigo:String;
    private Descricao:String;
    private UnidadeMedida:Unidade_De_Medida;
    private QuantidadeEmEstoque:number;

    constructor(cod:String, desc:String, un:Unidade_De_Medida, qtd:number){
        this.Codigo = cod;
        this.Descricao = desc;
        this.UnidadeMedida = un;
        this.QuantidadeEmEstoque = qtd;
    }

    RetornaEstoque(){ () => { return this.QuantidadeEmEstoque;}}

    ImplementaEstoque(qtd:number):void{
        this.QuantidadeEmEstoque += qtd;
    }

    BaixaEstoque(qtd:number):void{
        if (qtd > this.QuantidadeEmEstoque)
            console.log('Estoque insuficiente. Verifique.');
        else
            this.QuantidadeEmEstoque -= qtd;
    }

    ImprimirDados(){
        console.log(`
        =-=-=-=-=-=-=-=-= Dados do Produto =-=-=-=-=-=-=-=-=\n
        Produto: ${this.Codigo} - ${this.Descricao} 
        Unidade de Medida: ${this.UnidadeMedida} 
        Quantidade disponível em Estoque: ${this.QuantidadeEmEstoque} 
        `)
    }
}

