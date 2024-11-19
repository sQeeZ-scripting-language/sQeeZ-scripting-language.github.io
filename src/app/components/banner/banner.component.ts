import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {
  public os: string = '';
  public oss: string[] = ['macOS', 'Windows', 'Linux'];
  public code: string = '@5,10,15,20,25 |> MAP(+3) |> FILTER(>15) |> REDUCE(+0);\nvar obj = @a:1,b:false,c:"last value";\nlog(obj);'

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.setOS();
  }

  download(os: string): void {
    const url = "https://api.github.com/repos/sQeeZ-scripting-language/interpreter/releases/latest";
    this.http.get(url).subscribe((data: any) => {
      data.assets.find((asset: any) => {
        if (asset.browser_download_url.includes(os.toLowerCase())) {
          window.location.href = asset.browser_download_url;
        }
      });
    });
  }

  private setOS(): void {
    const userAgent = navigator.userAgent;
    if (/Mac/i.test(userAgent)) {
      this.os = 'macOS';
    } else if (/Win/i.test(userAgent)) {
      this.os = 'Windows';
    } else {
      this.os = 'Linux';
    }
  }
}