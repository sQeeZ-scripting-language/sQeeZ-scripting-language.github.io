import { Component } from '@angular/core';
import { GridItem } from '../../interfaces/grid-item.interface';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  gridItems: GridItem[] = [{
    title: 'VSCode Extension',
    description: 'The sQeeZ extension for Visual Studio Code.',
    image: './grid/vsc-extension.svg',
    url: 'https://github.com/sQeeZ-scripting-language/language-server'
  }, {
    title: 'Playground',
    description: 'The sQeeZ playground for testing scripts.',
    image: './grid/playground.svg',
    url: 'https://sqeez-scripting-language.github.io/playground/'
  }, {
    title: 'Documentation',
    description: 'The sQeeZ documentation for learning the language.',
    image: './grid/documentation.svg',
    url: 'https://sqeez-scripting-language.github.io/documentation/'
  }, {
    title: 'GitHub',
    description: 'The sQeeZ GitHub organization.',
    image: './grid/github.svg',
    url: 'https://github.com/sqeez-scripting-language/'
  }, {
    title: 'All Releases',
    description: 'All sQeeZ releases on GitHub.',
    image: './grid/releases.svg',
    url: 'https://github.com/sQeeZ-scripting-language/interpreter/releases'
  }, {
    title: 'Contribute',
    description: 'Contribute to the sQeeZ project on GitHub.',
    image: './grid/contribute.svg',
    url: 'https://github.com/sQeeZ-scripting-language#-become-part-of-the-sqeez-journey'
  }];

  redirectTo(url: string): void {
    // new tab
    window.open(url, '_blank');
  }
}