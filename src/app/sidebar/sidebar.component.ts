import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, QueryList, viewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  template: `
  <div #btnSideBar class="menu-btn sidebar-btn"  id="sidebar-btn" (click)="sideBarOpen(sideBar)">
        <i class='bx bx-menu'></i>
        <i class='bx bx-x'></i>
    </div>
    <div class="dark-mode-btn" id="dark-mode-btn">
        <i class='bx bx-moon'></i>
        <i class='bx bx-sun'></i>
    </div>
    <div #sideBar class="sidebar sidebar-hidden fixed flex flex-col items-center justify-between bg-white dark:bg-gray-800" id="sidebar">
        <div class="header">
            <div class="menu-btn" id="menu-btn">
                <i class='bx bx-chevron-left'></i>
            </div>
            <div class="brand">
                <img class="brand-light" src="/brand/brand-light.svg" alt="logo">
                <img class="brand-dark" src="/brand/brand-dark.svg" alt="logo">
                <span>Ghostly</span>
            </div>
        </div>
        <div class="menu-container">
            
            <ul class="menu">
                <li class="menu-item menu-item-static active">
                    <a href="#" class="menu-link">
                        <i class='bx bx-home-alt-2'></i>
                        <span>Home</span>
                    </a>
                </li>
                <li class="menu-item menu-item-static">
                    <a href="#" class="menu-link">
                        <i class='bx bx-dashboard-alt'></i> 
                        <span>Dashboard</span>
                    </a>
                </li>
                <li class="menu-item menu-item-dropdown">
                    <a href="#" class="menu-link">
                        <i class='bx bx-shopping-bag'></i>
                        <span>Store</span>
                        <i class='bx bx-chevron-down'></i>
                    </a>
                    <ul class="sub-menu">
                        <li><a href="#" class="sub-menu-link">Products</a></li>
                        <li><a href="#" class="sub-menu-link">Orders</a></li>
                        <li><a href="#" class="sub-menu-link">Subscriptions</a></li>
                    </ul>
                </li>
                <li class="menu-item menu-item-static">
                    <a href="#" class="menu-link">
                        
                        <i class='bx bx-checks'  ></i> 
                        <span>Task</span>
                    </a>
                </li>
                <li class="menu-item menu-item-dropdown">
                    <a href="#" class="menu-link">
                        <i class='bx  bx-folder-open'></i> 
                        <span>File</span>
                        <i class='bx bx-chevron-down'></i>
                    </a>
                    <ul class="sub-menu">
                        <li><a href="#" class="sub-menu-link">Images</a></li>
                        <li><a href="#" class="sub-menu-link">Audios</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="footer">
            <ul class="menu">
                <li class="menu-item menu-item-static">
                    <a href="#" class="menu-link">
                        <i class='bx bx-bell'></i>
                        <span>Notifications</span>
                    </a>
                </li>
                <li class="menu-item menu-item-static">
                    <a href="#" class="menu-link">
                        <i class='bx bx-cog'></i>
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
            <div class="user">
                <div class="user-img">
                    <img src="/assets/img/user.png" class="invert" alt="user">
                    
                </div>
                <div class="user-data">
                    <span class="name">John Walker</span>
                    <span class="email">jhongmail.com</span>
                </div>
                <div class="user-icon">
                    <i class='bx bx-exit'></i>
                </div>
            </div>
        </div>
    </div>
  `,
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements AfterViewInit { 
  btnSideBar= viewChild<ElementRef<HTMLDivElement>>('btnSideBar');
  sideBar = viewChild<ElementRef<HTMLDivElement>>('sideBar');
  

  ngAfterViewInit(): void {

  }

  sideBarOpen(sidebar: HTMLDivElement){
    
    if(this.sideBar()?.nativeElement.classList.contains('sidebar-hidden'))
      {
        this.sideBar()?.nativeElement.classList.add('sidebar-show');
        this.sideBar()?.nativeElement.classList.remove('sidebar-hidden');
      }
      else{
         this.sideBar()?.nativeElement.classList.add('sidebar-hidden');
         this.sideBar()?.nativeElement.classList.remove('sidebar-show');
      }
  }
}
