export interface ImgListInterface {
	name: number | string
	url?: string // ? 表示当前参数可选
}

export interface UserInfoData {
	name: string
	age: number
	imgList: Array<ImgListInterface>
	obj: ImgListInterface
}

// 定义泛型
export interface ResData<T> {
	name: T
}

// 枚举类型
export enum Images {
	Red = 'red',
	Green = 'green',
	Blue = 'blue'
}
export class TestClass<T> {
	public name: string
	constructor(pname: string) {
		this.name = pname
	}
}

// 定义类
export class DefineClass<T> {
	public name: string
	public age?: T
	constructor(name: string, age: T) {
		// 构造函数
		this.name = name
		this.age = age
	}
	run() {
		return `姓名叫${this.name}年龄${this.age}岁`
	}
}

// 继承，可以继承构造函数的属性和方法
export class NewDefineClass extends DefineClass<number> {
	constructor(name: string, age: number) {
		super(name, age)
	}
}
