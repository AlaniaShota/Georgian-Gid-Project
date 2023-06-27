class LocalStorageUtil {
  constructor() {
    this.keyName = "dishes";
  }
  getGeorgianDishes() {
    const foodLocalStorage = localStorage.getItem(this.keyName);
    if (foodLocalStorage !== null) {
      return JSON.parse(foodLocalStorage);
    }
    return [];
  }
  putGeorgianDishes(id) {
    let dishes = this.getGeorgianDishes();
    let pushDishes = false;
    const index = dishes.indexOf(id);
    if (index === -1) {
      dishes.push(id);
      pushDishes = true;
    } else {
      dishes.splice(index, 1);
    }
    localStorage.setItem(this.keyName, JSON.stringify(dishes));
    return { pushDishes, dishes };
  }
}
const localStorageUtil = new LocalStorageUtil();
