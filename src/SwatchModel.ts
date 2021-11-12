export class SwatchModel {
    key!: string
    name!: string
    hex!: string
    weight!: string
    LAB!: LAB
    LCH!: LCH
    HSV!: HSV
    WCAG2!: number
    constructor(hex: string) {
        this.hex = hex
    }
}

export class LAB {
    L: number
    a: number
    b: number
    constructor(Lab: number[]) {
        this.L = Lab[0]
        this.a = Lab[1]
        this.b = Lab[2]
    }
}

export class LCH {
    L: number
    C: number
    H: number
    constructor(LCH: number[]) {
        this.L = LCH[0]
        this.C = LCH[1]
        this.H = LCH[2]
    }
}

export class HSV {
    H: number
    S: number
    V: number
    constructor(HSV: number[]) {
        this.H = HSV[0]
        this.S = HSV[1]
        this.V = HSV[2]
    }
}