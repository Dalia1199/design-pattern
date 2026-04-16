class BubbleSort {
  sort(arr) {
    return arr.sort((a, b) => a - b);
  }
}

class QuickSort {
  sort(arr) {
    return arr.sort((a, b) => a - b);
  }
}

class MergeSort {
  sort(arr) {
    return arr.sort((a, b) => a - b);
  }
}
class Sorter {
  setSortingStrategy(strategy) {
    this.strategy = strategy;
  }

  sort(arr) {
    const result = this.strategy.sort(arr);
    console.log(result);
  }
}
const sorter = new Sorter();

sorter.setSortingStrategy(new BubbleSort());
sorter.sort([5, 3, 8, 1]);

sorter.setSortingStrategy(new QuickSort());
sorter.sort([5, 3, 8, 1]);