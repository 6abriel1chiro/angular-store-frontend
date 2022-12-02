export interface Phone{
    id?: number;
    marca: string;
    modelo: string;
    gbalmacenamiento: number;
    gbram: number;
    core_id:number;
    accessory_ids:Array<number>;
    core?:any;
    accessories?:any;
  }