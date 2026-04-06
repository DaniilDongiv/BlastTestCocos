export class Grid<T> {

    private constructor(
        readonly rows: number,
        readonly cols: number,
        private readonly data: T[],
    ) {}

    static create<T>(rows: number, cols: number, init: (row: number, col: number) => T): Grid<T> {
        const data: T[] = new Array(rows * cols);
        for (let r = 0; r < rows; r++)
            for (let c = 0; c < cols; c++)
                data[r * cols + c] = init(r, c);
        return new Grid(rows, cols, data);
    }

    static filled<T>(rows: number, cols: number, value: T): Grid<T> {
        return new Grid(rows, cols, new Array<T>(rows * cols).fill(value));
    }

    get(row: number, col: number): T {
        return this.data[row * this.cols + col];
    }

    set(row: number, col: number, value: T): void {
        this.data[row * this.cols + col] = value;
    }

    swap(r1: number, c1: number, r2: number, c2: number): void {
        const i = r1 * this.cols + c1;
        const j = r2 * this.cols + c2;
        const tmp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = tmp;
    }

    inBounds(row: number, col: number): boolean {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    }

    forEach(fn: (value: T, row: number, col: number) => void): void {
        for (let r = 0; r < this.rows; r++)
            for (let c = 0; c < this.cols; c++)
                fn(this.data[r * this.cols + c], r, c);
    }

    collect<U>(fn: (value: T, row: number, col: number) => U | null): U[] {
        const out: U[] = [];
        for (let r = 0; r < this.rows; r++)
            for (let c = 0; c < this.cols; c++) {
                const result = fn(this.data[r * this.cols + c], r, c);
                if (result !== null) out.push(result);
            }
        return out;
    }
}
