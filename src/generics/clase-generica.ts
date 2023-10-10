/*definicion de una clase generica*/
export class ClaseGenerica<T> {

    constructor(private id: number) {

    }
    public save(entidad: T) : void {
        console.log(`grabando entidad generica`, entidad);
    }
}

/*sub clase hija del generic */
export class SubClase extends ClaseGenerica<string> {
    
}
export class SubClaseB extends ClaseGenerica<number> {
    
}