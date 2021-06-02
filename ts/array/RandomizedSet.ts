// 常数时间插入、删除和获取随机元素
/**
 * 思路：利用数组最后插入和删除为O(1)来搞定
 *      需要使用map来记录，判断，和更新
 * */ 
class RandomizedSet {
    constructor() {
      this.array = [];
      this.map = {};
    }
  
    array: any[];
    map: any;
  
    insert(val: number): boolean {
      if (this.map[val] === void 0) {
        this.array.push(val);
        this.map[val] = this._size() - 1;
        return true;
      } else {
        return false;
      }
    }
  
    remove(val: number): boolean {
      if (this.map[val] === void 0) {
        return false;
      } 
  
      const index = this.map[val];
      const lastIndex = this._size() - 1
      if(index < lastIndex){
        this._swap(index,lastIndex);
        this.map[this.array[index]] = index;
      }
  
      this.array.pop();
      delete this.map[val]
      return true
  
    }
  
    getRandom(): number {
      
      return this.array[Math.floor(Math.random() * this._size())];
    }
  
    _size():number {
      return this.array.length;
    }
  
    _swap(a:number, b:number):void {
      const temp = this.array[b];
      this.array[b] = this.array[a];
      this.array[a] = temp;
    }
  }
  