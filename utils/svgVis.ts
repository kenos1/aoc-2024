import { escape } from "jsr:@std/html"

export class SVGVisualiser {
  color: string = "#000000";
  svgElements: string[] = [];

  constructor(public width: number, public height: number) {}

  setColor(newColor: string): SVGVisualiser {
    this.color = newColor;
    return this;
  }

  setWidth(newWidth: number): SVGVisualiser {
    this.width = newWidth;
    return this;
  }

  setHeight(newHeight: number): SVGVisualiser {
    this.height = newHeight;
    return this;
  }

  rect(x: number, y: number, width: number, height: number): SVGVisualiser {
    this.svgElements.push(`<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${this.color}" />`)
    return this;
  }

  circle(x: number, y: number, radius: number): SVGVisualiser {
    this.svgElements.push(`<circle cx="${x}" cy="${y}" r="${radius}" fill="${this.color}" />`)
    return this;
  }

  text(text: string, x: number, y: number, height: number): SVGVisualiser {
    this.svgElements.push(`<text x="${x}" y="${y}" style="font-size:${height}px;font-family:monospace">${escape(text)}</text>`)
    return this;
  }

  clear(lastIndex: number): SVGVisualiser {
    this.svgElements.splice(lastIndex - 1);
    return this;
  }

  toString(): string {
    return `<svg viewBox="0 0 ${this.width} ${this.height}" xmlns="http://www.w3.org/2000/svg">${this.svgElements.join("")}</svg>`
  }
}

// test svg
console.log(new SVGVisualiser(300, 300)
  .setColor("#ff0000")
  .rect(0, 0, 100, 300)
  .setColor("#00ff00")
  .rect(100, 0, 100, 300)
  .setColor("#0000ff")
  .rect(200, 0, 100, 300)
  .setColor("#ffffff")
  .circle(150, 150, 50)
  .setColor("#000000")
  .text("hello world!", 10, 50, 30)
  .text("hello world!", 10, 100, 60)
  .toString())
