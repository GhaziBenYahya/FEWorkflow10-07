export class Access {
    id: number;
    name: string;
    code: string;
    type: string;
    path: string;
    parent: Access;
    subAccess: Access[];
  
    constructor(
      id: number,
      name: string,
      code: string,
      type: string,
      path: string,
      parent: Access,
      subAccess: Access[]
    ) {
      this.id = id;
      this.name = name;
      this.code = code;
      this.type = type;
      this.path = path;
      this.parent = parent;
      this.subAccess = subAccess;
    }
  }
  