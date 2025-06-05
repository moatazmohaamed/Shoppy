import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, QuickToolbarService, HtmlEditorService, RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { editorData } from '../../../../public/data';
import { HeaderComponent } from '../../shared/components/header/header.component';
@Component({
  selector: 'app-editor',
  imports: [RichTextEditorModule, HeaderComponent],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
  providers: [ToolbarService, LinkService, ImageService, QuickToolbarService, HtmlEditorService]

})
export class EditorComponent {
  content = editorData;

}
