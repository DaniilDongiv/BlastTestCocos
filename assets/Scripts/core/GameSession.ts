import { GameConfig } from '../config/GameConfig';
import { BoosterType, GameResult } from './Types';

export class GameSession {

    private score            = 0;
    private movesRemaining:  number;
    private targetScore:     number;
    private shufflesRemaining: number;
    private result: GameResult = GameResult.None;

    private readonly boosterCounts = new Map<BoosterType, number>();

    constructor() {
        this.movesRemaining    = GameConfig.MAX_MOVES;
        this.targetScore       = GameConfig.TARGET_SCORE;
        this.shufflesRemaining = GameConfig.MAX_SHUFFLES;

        this.boosterCounts.set(BoosterType.Bomb,     GameConfig.INITIAL_BOMB_COUNT);
        this.boosterCounts.set(BoosterType.Teleport, GameConfig.INITIAL_TELEPORT_COUNT);
    }

    public getScore(): number       { return this.score; }
    public getTargetScore(): number { return this.targetScore; }

    public calcGroupScore(groupSize: number): number {
        return Math.floor(GameConfig.BASE_POINTS_PER_TILE * groupSize * (groupSize - 1) / 2);
    }

    public calcEffectScore(tilesDestroyed: number): number {
        return GameConfig.BASE_POINTS_PER_TILE * tilesDestroyed;
    }

    public addScore(pts: number): void { this.score += pts; }

    public getMovesRemaining(): number { return this.movesRemaining; }

    public consumeMove(): void {
        if (this.movesRemaining > 0) this.movesRemaining--;
    }

    public getShufflesRemaining(): number { return this.shufflesRemaining; }

    public consumeShuffle(): boolean {
        if (this.shufflesRemaining > 0) { this.shufflesRemaining--; return true; }
        return false;
    }

    public getBoosterCount(type: BoosterType): number {
        return this.boosterCounts.get(type) || 0;
    }

    public consumeBooster(type: BoosterType): boolean {
        const c = this.getBoosterCount(type);
        if (c > 0) { this.boosterCounts.set(type, c - 1); return true; }
        return false;
    }

    public getResult(): GameResult { return this.result; }
    public isGameOver(): boolean   { return this.result !== GameResult.None; }

    public checkWin(): boolean {
        if (this.score >= this.targetScore) { this.result = GameResult.Win; return true; }
        return false;
    }

    public checkLose(): boolean {
        if (this.movesRemaining <= 0 && this.score < this.targetScore) {
            this.result = GameResult.Lose;
            return true;
        }
        return false;
    }

    public forceLose(): void { this.result = GameResult.Lose; }
}
