import { GameConfig } from '../config/GameConfig';
import {
    BoosterType, CellData, GridPosition, SuperTileType,
} from '../core/Types';

export interface IInputContext {
    transitionTo(state: IInputState): void;

    getCellAt(row: number, col: number): CellData | null;
    findGroup(row: number, col: number): GridPosition[];
    getBoosterCount(type: BoosterType): number;

    executeGroupMatch(row: number, col: number): void;
    executeSuperTileActivation(row: number, col: number, type: SuperTileType): void;
    executeBombBooster(row: number, col: number): void;
    executeTeleportSwap(a: GridPosition, b: GridPosition): void;

    highlightTile(row: number, col: number, on: boolean): void;
    clearHighlights(): void;
}

export interface IInputState {
    readonly activeBooster: BoosterType;

    onCellClick(ctx: IInputContext, row: number, col: number): void;
    onBoosterBombClick(ctx: IInputContext): void;
    onBoosterTeleportClick(ctx: IInputContext): void;
}

export class IdleState implements IInputState {

    public readonly activeBooster = BoosterType.None;

    public onCellClick(ctx: IInputContext, row: number, col: number): void {
        const cell = ctx.getCellAt(row, col);
        if (!cell) return;

        if (cell.superType !== SuperTileType.None) {
            ctx.executeSuperTileActivation(row, col, cell.superType);
            return;
        }

        const group = ctx.findGroup(row, col);
        if (group.length >= GameConfig.MIN_GROUP_SIZE) {
            ctx.executeGroupMatch(row, col);
        }
    }

    public onBoosterBombClick(ctx: IInputContext): void {
        if (ctx.getBoosterCount(BoosterType.Bomb) <= 0) return;
        ctx.transitionTo(new BombBoosterState());
    }

    public onBoosterTeleportClick(ctx: IInputContext): void {
        if (ctx.getBoosterCount(BoosterType.Teleport) <= 0) return;
        ctx.transitionTo(new TeleportFirstPickState());
    }
}

export class BombBoosterState implements IInputState {

    public readonly activeBooster = BoosterType.Bomb;

    public onCellClick(ctx: IInputContext, row: number, col: number): void {
        ctx.executeBombBooster(row, col);
    }

    public onBoosterBombClick(ctx: IInputContext): void {
        ctx.transitionTo(new IdleState());
    }

    public onBoosterTeleportClick(ctx: IInputContext): void {
        ctx.transitionTo(new IdleState());
    }
}

export class TeleportFirstPickState implements IInputState {

    public readonly activeBooster = BoosterType.Teleport;

    public onCellClick(ctx: IInputContext, row: number, col: number): void {
        if (!ctx.getCellAt(row, col)) return;

        ctx.highlightTile(row, col, true);
        ctx.transitionTo(new TeleportSecondPickState({ row, col }));
    }

    public onBoosterBombClick(ctx: IInputContext): void {
        ctx.transitionTo(new IdleState());
    }

    public onBoosterTeleportClick(ctx: IInputContext): void {
        ctx.transitionTo(new IdleState());
    }
}

export class TeleportSecondPickState implements IInputState {

    public readonly activeBooster = BoosterType.Teleport;

    constructor(private readonly firstPick: GridPosition) {}

    public onCellClick(ctx: IInputContext, row: number, col: number): void {
        const a = this.firstPick;

        if (a.row === row && a.col === col) {
            ctx.highlightTile(a.row, a.col, false);
            ctx.transitionTo(new TeleportFirstPickState());
            return;
        }

        ctx.clearHighlights();
        ctx.executeTeleportSwap(a, { row, col });
    }

    public onBoosterBombClick(ctx: IInputContext): void {
        ctx.highlightTile(this.firstPick.row, this.firstPick.col, false);
        ctx.transitionTo(new IdleState());
    }

    public onBoosterTeleportClick(ctx: IInputContext): void {
        ctx.highlightTile(this.firstPick.row, this.firstPick.col, false);
        ctx.transitionTo(new IdleState());
    }
}

export class LockedState implements IInputState {

    public readonly activeBooster = BoosterType.None;

    public onCellClick(_ctx: IInputContext, _row: number, _col: number): void {}
    public onBoosterBombClick(_ctx: IInputContext): void {}
    public onBoosterTeleportClick(_ctx: IInputContext): void {}
}
