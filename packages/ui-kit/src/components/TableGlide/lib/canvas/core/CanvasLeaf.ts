/* eslint-disable class-methods-use-this */
import { CanvasNode } from './CanvasNode';

export abstract class CanvasLeaf extends CanvasNode {
  override addChild() {
    throw new Error('CanvasLeaf cannot have children');
  }
}
