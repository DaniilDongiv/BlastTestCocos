const { ccclass } = cc._decorator;

@ccclass
export default class TileRenderer extends cc.Component {

    private sprite: cc.Sprite | null = null;

    public init(spriteFrame: cc.SpriteFrame): void {
        this.sprite = this.getComponent(cc.Sprite) || this.addComponent(cc.Sprite);
        this.sprite.spriteFrame = spriteFrame;
    }

    public setSpriteFrame(sf: cc.SpriteFrame): void {
        if (this.sprite) this.sprite.spriteFrame = sf;
    }

    public playDestroy(dur: number): Promise<void> {
        return new Promise<void>(resolve => {
            cc.tween(this.node)
                .to(dur, { scale: 0, opacity: 0 }, { easing: 'backIn' })
                .call(() => resolve())
                .start();
        });
    }

    public playSpawn(dur: number): Promise<void> {
        this.node.scale   = 0;
        this.node.opacity = 255;
        return new Promise<void>(resolve => {
            cc.tween(this.node)
                .to(dur, { scale: 1 }, { easing: 'backOut' })
                .call(() => resolve())
                .start();
        });
    }

    public playFall(targetY: number, dur: number): Promise<void> {
        return new Promise<void>(resolve => {
            cc.tween(this.node)
                .to(dur, { y: targetY }, { easing: 'bounceOut' })
                .call(() => resolve())
                .start();
        });
    }

    public playMoveTo(target: cc.Vec2, dur: number): Promise<void> {
        return new Promise<void>(resolve => {
            cc.tween(this.node)
                .to(dur, { x: target.x, y: target.y }, { easing: 'sineInOut' })
                .call(() => resolve())
                .start();
        });
    }

    public setHighlight(on: boolean): void {
        cc.Tween.stopAllByTarget(this.node);
        if (on) {
            cc.tween(this.node)
                .repeatForever(
                    cc.tween()
                        .to(0.25, { scale: 1.15 })
                        .to(0.25, { scale: 1.0 }),
                )
                .start();
        } else {
            this.node.scale = 1.0;
        }
    }
}
