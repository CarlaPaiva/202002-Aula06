export class Carro{
    
    private Marca:string;
    private Modelo:string;
    private Placa:string;
    private Velocidade:number;
    private VelocidadeMaxima:number;

    constructor(marca:string, modelo:string, placa:string,
                vel:number, velMax:number){
        this.Marca = marca;
        this.Modelo = modelo;
        this.Placa = placa;
        this.Velocidade = vel;
        this.VelocidadeMaxima = velMax;
    }

    
    Acelerar(velocidade:number){

        let tempVelocidade = this.Velocidade + velocidade;
        
        if (velocidade > 10)
            console.log('Não é permitido acelerar mais de 10km/h.');
        else if (tempVelocidade > this.VelocidadeMaxima)
            console.log('Não é possível acelerar. Velocidade máxima atingida.');
        else
            this.Velocidade = tempVelocidade;      
    }

    Frear(){
        let tempo:number = 0;

        while (this.Velocidade >= 10){
            this.Velocidade -= 10;
            tempo++;
        }

        return tempo;
    }
    

    ImprimirDados(){
        console.log(`
        ================== Carro ==================
        Marca: ${this.Marca}
        Modelo: ${this.Modelo}
        Placa: ${this.Placa}
        Velocidade Atual: ${this.Velocidade}Km/h
        Velocidade Máxima: ${this.VelocidadeMaxima}Km/h
        `);
    }

}