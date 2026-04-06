import { GameConfig } from '../config/GameConfig';
import { BoosterType } from '../core/Types';

export class HUDPresenter {

    private bombPanel:  cc.Node | null = null;
    private telePanel:  cc.Node | null = null;
    private bombPanelBaseScale  = 1;
    private telePanelBaseScale  = 1;

    private scoreDisplayed = 0;
    private scoreTarget    = 0;
    private scoreFrom      = 0;
    private scoreElapsed   = 0;
    private scoreDuration  = 0;
    private targetScore    = 0;

    constructor(
        private readonly scoreLabel:    cc.Label | null,
        private readonly movesLabel:    cc.Label | null,
        private readonly bombLabel:     cc.Label | null,
        private readonly teleportLabel: cc.Label | null,
        font?: cc.Font,
    ) {
        if (font) this.applyFont(font);
    }

    public initBoosterPanels(bombPanel: cc.Node | null, telePanel: cc.Node | null): void {
        this.bombPanel = bombPanel;
        this.telePanel = telePanel;
        if (bombPanel) this.bombPanelBaseScale = bombPanel.scale;
        if (telePanel) this.telePanelBaseScale = telePanel.scale;
    }

    public update(dt: number): void {
        if (this.scoreDuration <= 0 || this.scoreDisplayed === this.scoreTarget) return;

        this.scoreElapsed += dt;
        const t    = Math.min(1, this.scoreElapsed / this.scoreDuration);
        const ease = 1 - Math.pow(1 - t, 3);
        this.scoreDisplayed = Math.round(
            this.scoreFrom + (this.scoreTarget - this.scoreFrom) * ease,
        );
        this.setScore(this.scoreDisplayed, this.targetScore);
    }

    public animateScoreTo(target: number): void {
        if (target === this.scoreTarget && this.scoreDisplayed === target) return;

        this.scoreFrom    = this.scoreDisplayed;
        this.scoreTarget  = target;
        this.scoreElapsed = 0;

        const diff = Math.abs(target - this.scoreFrom);
        this.scoreDuration = Math.max(
            GameConfig.SCORE_COUNTER_DURATION,
            Math.min(0.9, diff / 300),
        );
    }

    public resetScore(targetScore: number): void {
        this.scoreDisplayed = 0;
        this.scoreTarget    = 0;
        this.scoreFrom      = 0;
        this.scoreDuration  = 0;
        this.targetScore    = targetScore;
        this.setScore(0, targetScore);
    }

    public setActiveBooster(type: BoosterType): void {
        this.setPanelActive(this.bombPanel, this.bombPanelBaseScale, type === BoosterType.Bomb);
        this.setPanelActive(this.telePanel, this.telePanelBaseScale, type === BoosterType.Teleport);
    }

    public setScore(current: number, target: number): void {
        if (this.scoreLabel) this.scoreLabel.string = `ОЧКИ:\n${current}/${target}`;
    }

    public setMoves(remaining: number): void {
        if (this.movesLabel) this.movesLabel.string = `${remaining}`;
    }

    public setBombCount(n: number): void {
        if (this.bombLabel) this.bombLabel.string = `${n}`;
    }

    public setTeleportCount(n: number): void {
        if (this.teleportLabel) this.teleportLabel.string = `${n}`;
    }

    private setPanelActive(panel: cc.Node | null, baseScale: number, active: boolean): void {
        if (!panel) return;
        cc.Tween.stopAllByTarget(panel);

        if (active) {
            cc.tween(panel)
                .repeatForever(
                    cc.tween()
                        .to(0.35, { scale: baseScale * 1.1 },  { easing: 'sineInOut' })
                        .to(0.35, { scale: baseScale * 0.95 }, { easing: 'sineInOut' }),
                )
                .start();
        } else {
            panel.scale = baseScale;
        }
    }

    private applyFont(font: cc.Font): void {
        const labels = [this.scoreLabel, this.movesLabel, this.bombLabel, this.teleportLabel];
        for (const l of labels) {
            if (l) {
                l.font          = font;
                l.useSystemFont = false;
            }
        }
    }
}
