export class ResultPopup {

    constructor(
        private readonly parent: cc.Node,
        private readonly font:   cc.Font | null,
    ) {}

    public show(
        isWin: boolean,
        score: number,
        targetScore: number,
        onRestart: () => void,
    ): void {
        const overlay = this.createOverlay();

        this.addTitle(overlay, isWin);
        this.addScoreLabel(overlay, score, targetScore);
        this.addRestartButton(overlay, isWin, onRestart);

        if (isWin) this.spawnConfetti(overlay);
    }

    private createOverlay(): cc.Node {
        const W = this.parent.width;
        const H = this.parent.height;

        const overlay = new cc.Node('ResultOverlay');
        overlay.parent = this.parent;
        overlay.setContentSize(W, H);
        overlay.setPosition(0, 0);
        overlay.opacity = 0;

        const bg = overlay.addComponent(cc.Graphics);
        bg.fillColor = new cc.Color(0, 0, 0, 180);
        bg.rect(-W / 2, -H / 2, W, H);
        bg.fill();

        overlay.on(cc.Node.EventType.TOUCH_START, (e: cc.Event.EventTouch) => e.stopPropagation());
        overlay.on(cc.Node.EventType.TOUCH_END,   (e: cc.Event.EventTouch) => e.stopPropagation());

        cc.tween(overlay).to(0.35, { opacity: 255 }).start();
        return overlay;
    }

    private addTitle(overlay: cc.Node, isWin: boolean): void {
        const title = this.makeLabel(overlay, 0, 350,
            isWin ? 'ПОБЕДА!' : 'ПОРАЖЕНИЕ!', 80);
        title.color = isWin ? cc.color(255, 220, 50) : cc.color(255, 80, 80);
        title.scale = 0;

        cc.tween(title)
            .delay(0.15)
            .to(0.45, { scale: 1.15, y: 130 }, { easing: 'backOut' })
            .to(0.12, { scale: 1.0 },          { easing: 'sineInOut' })
            .start();

        if (isWin) {
            cc.tween(title)
                .delay(0.75)
                .repeatForever(
                    cc.tween()
                        .to(0.8, { scale: 1.06 }, { easing: 'sineInOut' })
                        .to(0.8, { scale: 1.0 },  { easing: 'sineInOut' }),
                )
                .start();
        }
    }

    private addScoreLabel(overlay: cc.Node, score: number, targetScore: number): void {
        const scoreNode = this.makeLabel(overlay, 0, 20,
            `Очки: ${score} / ${targetScore}`, 50);
        scoreNode.scale   = 0;
        scoreNode.opacity = 0;

        cc.tween(scoreNode)
            .delay(0.50)
            .to(0.35, { scale: 1, opacity: 255 }, { easing: 'backOut' })
            .start();
    }

    private addRestartButton(overlay: cc.Node, isWin: boolean, onRestart: () => void): void {
        const btn = new cc.Node('RestartBtn');
        btn.parent = overlay;
        btn.setPosition(0, -280);
        btn.setContentSize(340, 90);
        btn.setAnchorPoint(0.5, 0.5);
        btn.scale = 0;

        const g = btn.addComponent(cc.Graphics);
        g.fillColor = isWin ? new cc.Color(60, 170, 60) : new cc.Color(170, 60, 60);
        g.roundRect(-170, -45, 340, 90, 16);
        g.fill();

        this.makeLabel(btn, 0, 0, 'ЗАНОВО', 52);

        cc.tween(btn)
            .delay(0.70)
            .to(0.40, { scale: 1, y: -100 }, { easing: 'backOut' })
            .start();

        btn.on(cc.Node.EventType.TOUCH_END, () => {
            cc.tween(overlay)
                .to(0.2, { opacity: 0, scale: 0.9 })
                .call(() => { overlay.destroy(); onRestart(); })
                .start();
        });
    }

    private spawnConfetti(parent: cc.Node): void {
        const palette = [
            cc.color(255, 220, 50),
            cc.color(255, 100, 40),
            cc.color(80,  210, 255),
            cc.color(255, 70,  170),
            cc.color(100, 255, 100),
            cc.color(200, 130, 255),
        ];

        const COUNT = 24;
        for (let i = 0; i < COUNT; i++) {
            const spark = new cc.Node('Confetti');
            spark.parent = parent;
            spark.setPosition(0, 130);
            spark.scale   = 0;
            spark.opacity = 255;

            const sz  = 8 + Math.random() * 8;
            const gfx = spark.addComponent(cc.Graphics);
            gfx.fillColor = palette[i % palette.length];
            gfx.roundRect(-sz / 2, -sz / 2, sz, sz, 2);
            gfx.fill();

            const angle  = (Math.PI * 2 * i) / COUNT + (Math.random() - 0.5) * 0.4;
            const radius = 220 + Math.random() * 260;
            const tx     = Math.cos(angle) * radius;
            const ty     = Math.sin(angle) * radius + 130;
            const delay  = 0.35 + Math.random() * 0.25;
            const dur    = 0.6  + Math.random() * 0.5;
            const spin   = (Math.random() - 0.5) * 720;

            cc.tween(spark)
                .delay(delay)
                .to(0.08, { scale: 1 })
                .to(dur, {
                    x: tx, y: ty,
                    opacity: 0,
                    scale: 0.2,
                    angle: spin,
                } as any, { easing: 'sineOut' })
                .call(() => spark.destroy())
                .start();
        }
    }

    private makeLabel(parent: cc.Node, x: number, y: number, text: string, size: number): cc.Node {
        const n = new cc.Node();
        n.parent = parent;
        n.setPosition(x, y);

        const l      = n.addComponent(cc.Label);
        l.string     = text;
        l.fontSize   = size;
        l.lineHeight = size + 10;
        l.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        l.verticalAlign   = cc.Label.VerticalAlign.CENTER;

        if (this.font) {
            l.font          = this.font;
            l.useSystemFont = false;
        }

        n.color = cc.Color.WHITE;
        return n;
    }
}
