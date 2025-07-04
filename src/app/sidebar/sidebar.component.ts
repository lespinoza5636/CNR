import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, QueryList, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  template: `
  <div #btnSideBar class="menu-btn sidebar-btn fixed z-20"  id="sidebar-btn" (click)="sideBarOpen()">
        <i class='bx bx-menu'></i>
        <i class='bx bx-x'></i>
    </div>
    <!-- <div class="dark-mode-btn" id="dark-mode-btn">
        <i class='bx bx-moon'></i>
        <i class='bx bx-sun'></i>
    </div> -->
    <div #sideBar class="sidebar z-50 sidebar-hidden fixed flex flex-col items-center justify-between bg-white dark:bg-gray-800" id="sidebar">
        <div class="header">
            <div class="menu-btn" id="menu-btn">
                <i class='bx bx-chevron-left'></i>
            </div>
            <div class="brand">
                <!-- <img class="brand-light" src="/brand/brand-light.svg" alt="logo"> -->
                <img class="brand-light" src="assets/img/logo-negativo.png" alt="logo">
                <!-- <span>UNCSM</span> -->
            </div>
        </div>
        <div class="menu-container">
            
            <ul class="menu">
                <li class="menu-item menu-item-static active">
                    <a href="#" class="menu-link">
                        <i class='bx  bx-community'  ></i> 
                        <span>Estudiantes</span>
                    </a>
                </li>
                <li class="menu-item menu-item-static">
                    <a href="#" class="menu-link">
                        <i class='bx bx-dashboard-alt'></i> 
                        <span>Dashboard</span>
                    </a>
                </li>
                <!-- <li class="menu-item menu-item-dropdown">
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
                </li> -->
                <li class="menu-item menu-item-static">
                    <a href="#" class="menu-link">
                        
                        <i class='bx bx-checks'  ></i> 
                        <span>Task</span>
                    </a>
                </li>
                <!-- <li class="menu-item menu-item-dropdown">
                    <a href="#" class="menu-link">
                        <i class='bx  bx-folder-open'></i> 
                        <span>File</span>
                        <i class='bx bx-chevron-down'></i>
                    </a>
                    <ul class="sub-menu">
                        <li><a href="#" class="sub-menu-link">Images</a></li>
                        <li><a href="#" class="sub-menu-link">Audios</a></li>
                    </ul>
                </li> -->
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
                    <span class="name">CNR</span>
                    <span class="email">Matricula</span>
                </div>
                <div class="user-icon">
                    <i class='bx bx-exit'></i>
                </div>
            </div>
        </div>
    </div>
    @if(open())
        {
    <div class="h-screen bg-gray-700 opacity-90 fixed z-20 inset-0" (click)="sideBarOpen()"></div>
        }
  `,
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements AfterViewInit { 
  btnSideBar= viewChild<ElementRef<HTMLDivElement>>('btnSideBar');
  sideBar = viewChild<ElementRef<HTMLDivElement>>('sideBar');
  open = signal<boolean>(false);

  ngAfterViewInit(): void {

  }

  sideBarOpen(){
    
    if(this.sideBar()?.nativeElement.classList.contains('sidebar-hidden'))
      {
        this.open.set(true);
        this.sideBar()?.nativeElement.classList.add('sidebar-show');
        this.sideBar()?.nativeElement.classList.remove('sidebar-hidden');
      }
      else{
        this.open.set(false);
         this.sideBar()?.nativeElement.classList.add('sidebar-hidden');
         this.sideBar()?.nativeElement.classList.remove('sidebar-show');
      }
  }
}
