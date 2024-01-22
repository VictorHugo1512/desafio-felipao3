class hero { // criei a classe hero
    constructor (name, age, classHero){ // usei o constructor para dar os parâmetros/métodos usados
        this.name = name;
        this.age = age;
        this.classHero = classHero;
    } 
    attack(){ // criei um switch case para cada tipo de herói e seu respectivo ataque
        let attack 
        switch(this.classHero){
            case 'mago':
                attack = "magia"
                    break
            case 'guerreiro':
                attack = "espada"
                    break
            case 'monge':
                attack = "artes marciais"
                    break
            case 'ninja':
                attack = "shuriken"
                    break
        }
        console.log(`O ${this.classHero} ${this.name} atacou usando ${attack}`) // mandei aparecer na tela que o herói atacou e o tipo de ataque
    }
}
const myHero = new hero ("Victor", 23, "ninja") // criei uma constante e usei a instância hero, respeitando a sequência, dei o nome, a idade e o tipo
myHero.attack() // chamei a função para dar o retorno