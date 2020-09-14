import {Produto, Unidade_De_Medida} from "./Produto";

let mouse = new Produto("015", "Mouse Azul", Unidade_De_Medida.Unid, 20);
mouse.BaixaEstoque(50);
mouse.ImplementaEstoque(100);
mouse.BaixaEstoque(10);
mouse.ImprimirDados();