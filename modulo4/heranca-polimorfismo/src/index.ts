import { ClientRequest } from "http";

class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}
	public introduceYourself():string{
		return  `Ola, sou o ${this.name}, tenha um bom dia`
	}
}

const dataUser = new User("02", "kelvimarthur@gmail.com", "arthur", "123456") 
//console.log(dataUser)




class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
  
}

const userCustumer = new Customer("03", "joao@gmail.com", "joao lucas", "3333", "902-111-39")
console.log(userCustumer.introduceYourself()) 

//POLIFORMISMO

export type Client = {
	name: string;
	// Refere-se ao nome do cliente
  
	registrationNumber: number;
	// Refere-se ao número de cadastro do cliente na concessionária
	  // como se fosse um id
  
	consumedEnergy: number;
	// Refere-se à energia consumida pelo cliente no mês
  
	calculateBill(): number
	// Retorna o valor da conta em reais
}

const energyClient:Client = {
	name: "Arthur",
	registrationNumber: 30,
	consumedEnergy: 300,
	calculateBill: () =>{
		return 2
	}
}

//console.log(energyClient ,energyClient.calculateBill())

export abstract class Place {
	constructor(protected cep: string) {}
  
	  public getCep(): string {
		  return this.cep;
	}
}
//const placeClass = new Place("46545612378")
//console.log(placeClass)

/* ------------------------------------------------------------------------------------------------- */

export class Residence extends Place {
	constructor(
	  protected residentsQuantity: number,
	  // Refere-se ao número de moradores da casa
  
	  cep: string
	) {
	  super(cep);
	}
	public getNumberResidence():number{
		return this.residentsQuantity
	}
}
const instanceResidence = new Residence(23, "72115927")

export class Commerce extends Place {
	constructor(
	  protected floorsQuantity: number,
	  // Refere-se à quantidade de andares do lugar
  
	  cep: string
	) {
	  super(cep);
	}
	public getFloorsQuantity():number{
		return this.floorsQuantity
	}
}

const instanceCommerce = new Commerce(56, "82195684")

export class Industry extends Place {
	constructor(
	  protected machinesQuantity: number, 
	  // Refere-se à quantidade de máquinas do local 
	  
	  cep: string
		  ) {
		  super(cep);
	}
	public getMachinesQuantity():number{
		return this.machinesQuantity
	}
}

const instanceIndustry = new Industry(12, "45265326")

console.log(instanceResidence.getCep())
console.log(instanceCommerce.getCep())
console.log(instanceIndustry.getCep())


class ResidentialClient extends Residence implements Client{
	
	constructor(
		public name:string,
		public registrationNumber: number,
		public consumedEnergy: number,
		private cpf: string,
		residentsQuantity: number,
		cep: string
	){
		super(residentsQuantity, cep)
	}
	public getCpf(){
		return this.cpf
	}
	public calculateBill(): number {
		return this.consumedEnergy * 0.75
	}
}

