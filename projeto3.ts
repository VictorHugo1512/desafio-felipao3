enum EnumClassHero {
    MAGO = "mago",
    GUERREIRO = "guerreiro",
    MONGE = "monge",
    NINJA = "ninja"
}

interface HeroInterface {
    name: string
    age: number
    classHero: EnumClassHero 
}

class Hero { // criei a classe hero
    private hero: HeroInterface = {
        name: "",
        age: 0,
        classHero: EnumClassHero.MAGO
    }
    constructor (name: string, age: number, classHero : EnumClassHero){ // usei o constructor para dar os parâmetros/métodos usados
        this.hero.name = name;
        this.hero.age = age;
        this.hero.classHero = classHero;
    } 

    attack(){ 
        let attack 

        switch(this.hero.classHero){
            case EnumClassHero.MAGO:
                attack = "magia"
                    break
            case EnumClassHero.GUERREIRO:
                attack = "espada"
                    break
            case EnumClassHero.MONGE:
                attack = "artes marciais"
                    break
            case EnumClassHero.NINJA:
                attack = "shuriken"
                    break
        }

        console.log(`O ${this.hero.classHero} ${this.hero.name} atacou usando ${attack}`) // mandei aparecer na tela que o herói atacou e o tipo de ataque
    }
}

const myHero = new Hero("Victor", 23, EnumClassHero.NINJA) 
myHero.attack() 