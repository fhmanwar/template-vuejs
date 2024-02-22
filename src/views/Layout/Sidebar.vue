<template>
    <div class="sidebar">
        <div class="sidebar-header">
            <a href="{{ url('noble/dasbor') }}" class="sidebar-brand">Noble<span>UI</span></a>
            <div class="sidebar-toggler not-active">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="sidebar-body">
            <ul class="nav">
                <li class="nav-item nav-category">Main</li>
                <li class="nav-item">
                    <a href="{{ url('noble/dasbor') }}" class="nav-link">
                        <i class="link-icon" data-feather="box"></i>
                        <span class="link-title">Dashboard</span>
                    </a>
                </li>

                <li class="nav-item nav-category">Account Management</li>
                <li class="nav-item">
                    <a href="#accounts" class="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="accounts">
                        <i class="link-icon" data-feather="users"></i>
                        <span class="link-title">Accounts</span>
                        <i class="link-arrow" data-feather="chevron-down"></i>
                    </a>
                    <div class="collapse" id="accounts">
                        <ul class="nav sub-menu">
                            <li class="nav-item">
                                <a href="{{ url('/noble/role') }}" class="nav-link">Role</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('/noble/user') }}" class="nav-link">User</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item nav-category">web apps</li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="link-icon" data-feather="anchor"></i>
                        <span class="link-title">REST API</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="link-icon" data-feather="layers"></i>
                        <span class="link-title">Apps</span>
                    </a>
                </li>


                <li class="nav-item nav-category">Markets Management</li>
                <li class="nav-item">
                    <a href="#stores" class="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="stores">
                        <i class="link-icon fas fa-store"></i>
                        <span class="link-title">Stores</span>
                        <i class="link-arrow" data-feather="chevron-down"></i>
                    </a>
                    <div class="collapse" id="stores">
                        <ul class="nav sub-menu">
                            <li class="nav-item">
                                <a href="{{ url('noble/store') }}" class="nav-link">Store</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Store Request</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Store Reviews</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="#products" class="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="products">
                        <i class="link-icon fas fa-tags"></i>
                        <span class="link-title">Product</span>
                        <i class="link-arrow" data-feather="chevron-down"></i>
                    </a>
                    <div class="collapse" id="products">
                        <ul class="nav sub-menu">
                            <li class="nav-item">
                                <a href="{{ url('noble/material') }}" class="nav-link">Material</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('noble/product') }}" class="nav-link">Item</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="{{ url('noble/cart') }}" class="nav-link">
                        <i class="link-icon" data-feather="shopping-cart"></i>
                        <span class="link-title">Cart</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ url('noble/order') }}" class="nav-link">
                        <i class="link-icon fas fa-shopping-bag"></i>
                        <span class="link-title">Order</span>
                    </a>
                </li>

                <li class="nav-item nav-category">Accountancy</li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="link-icon fas fa-shopping-bag"></i>
                        <span class="link-title">Buying</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ url('noble/pembukuan/sell') }}" class="nav-link">
                        <i class="link-icon far fa-list-alt"></i>
                        <span class="link-title">Selling</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ url('noble/pembukuan/sell') }}" class="nav-link">
                        <i class="link-icon" data-feather="trending-down"></i>
                        <span class="link-title">Expense</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ url('noble/pembukuan/sell') }}" class="nav-link">
                        <i class="link-icon" data-feather="trending-up"></i>
                        <span class="link-title">Income</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ url('noble/pembukuan/profit') }}" class="nav-link">
                        <i class="link-icon fas fa-balance-scale"></i>
                        <span class="link-title">Profit</span>
                    </a>
                </li>


                <li class="nav-item nav-category">web apps</li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="collapse" href="#emails" role="button" aria-expanded="false" aria-controls="emails">
                        <i class="link-icon" data-feather="mail"></i>
                        <span class="link-title">Email</span>
                        <i class="link-arrow" data-feather="chevron-down"></i>
                    </a>
                    <div class="collapse" id="emails">
                        <ul class="nav sub-menu">
                            <li class="nav-item">
                                <a href="#" class="nav-link">Inbox</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Read</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Compose</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="link-icon" data-feather="message-square"></i>
                        <span class="link-title">Chat</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="link-icon" data-feather="calendar"></i>
                        <span class="link-title">Calendar</span>
                    </a>
                </li>

                <li class="nav-item nav-category">Components</li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="collapse" href="#uiComponents" role="button" aria-expanded="false" aria-controls="uiComponents">
                        <i class="link-icon" data-feather="feather"></i>
                        <span class="link-title">UI Kit</span>
                        <i class="link-arrow" data-feather="chevron-down"></i>
                    </a>
                    <div class="collapse" id="uiComponents">
                        <ul class="nav sub-menu">
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/alerts.html') }}" class="nav-link">Alerts</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/badges.html') }}" class="nav-link">Badges</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/breadcrumbs.html') }}" class="nav-link">Breadcrumbs</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/buttons.html') }}" class="nav-link">Buttons</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/button-group') }}.html" class="nav-link">Button group</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/cards.html') }}" class="nav-link">Cards</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/carousel.html') }}" class="nav-link">Carousel</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/collapse.html') }}" class="nav-link">Collapse</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/dropdowns.html') }}" class="nav-link">Dropdowns</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/list-group.html') }}" class="nav-link">List group</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/media-object.html') }}" class="nav-link">Media object</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/modal.html') }}" class="nav-link">Modal</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/navs.html') }}" class="nav-link">Navs</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/navbar.html') }}" class="nav-link">Navbar</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/pagination.html') }}" class="nav-link">Pagination</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/popover.html') }}" class="nav-link">Popovers</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/progress.html') }}" class="nav-link">Progress</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/scrollbar.html') }}" class="nav-link">Scrollbar</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/scrollspy.html') }}" class="nav-link">Scrollspy</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/spinners.html') }}" class="nav-link">Spinners</a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ url('sadmin/demo_3/pages/ui-components/tooltips.html') }}" class="nav-link">Tooltips</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="collapse" href="#advancedUI" role="button" aria-expanded="false" aria-controls="advancedUI">
                        <i class="link-icon" data-feather="anchor"></i>
                        <span class="link-title">Advanced UI</span>
                        <i class="link-arrow" data-feather="chevron-down"></i>
                    </a>
                    <div class="collapse" id="advancedUI">
                        <ul class="nav sub-menu">
                            <li class="nav-item">
                                <a href="#" class="nav-link">Cropper</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Owl carousel</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Sweet Alert</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="collapse" href="#forms" role="button" aria-expanded="false" aria-controls="forms">
                        <i class="link-icon" data-feather="inbox"></i>
                        <span class="link-title">Forms</span>
                        <i class="link-arrow" data-feather="chevron-down"></i>
                    </a>
                    <div class="collapse" id="forms">
                        <ul class="nav sub-menu">
                            <li class="nav-item">
                                <a href="#" class="nav-link">Basic Elements</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Advanced Elements</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Editors</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Wizard</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="collapse" href="#charts" role="button" aria-expanded="false" aria-controls="charts">
                        <i class="link-icon" data-feather="pie-chart"></i>
                        <span class="link-title">Charts</span>
                        <i class="link-arrow" data-feather="chevron-down"></i>
                    </a>
                    <div class="collapse" id="charts">
                        <ul class="nav sub-menu">
                            <li class="nav-item">
                                <a href="#" class="nav-link">Apex</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">ChartJs</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Flot</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Morris</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Peity</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Sparkline</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="collapse" href="#tables" role="button" aria-expanded="false" aria-controls="tables">
                        <i class="link-icon" data-feather="layout"></i>
                        <span class="link-title">Table</span>
                        <i class="link-arrow" data-feather="chevron-down"></i>
                    </a>
                    <div class="collapse" id="tables">
                        <ul class="nav sub-menu">
                            <li class="nav-item">
                                <a href="#" class="nav-link">Basic Tables</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Data Table</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="collapse" href="#icons" role="button" aria-expanded="false" aria-controls="icons">
                        <i class="link-icon" data-feather="smile"></i>
                        <span class="link-title">Icons</span>
                        <i class="link-arrow" data-feather="chevron-down"></i>
                    </a>
                    <div class="collapse" id="icons">
                        <ul class="nav sub-menu">
                            <li class="nav-item">
                                <a href="#" class="nav-link">Feather Icons</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Flag Icons</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Mdi Icons</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item nav-category">Pages</li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="collapse" href="#general-pages" role="button" aria-expanded="false" aria-controls="general-pages">
                        <i class="link-icon" data-feather="book"></i>
                        <span class="link-title">Special pages</span>
                        <i class="link-arrow" data-feather="chevron-down"></i>
                    </a>
                    <div class="collapse" id="general-pages">
                        <ul class="nav sub-menu">
                            <li class="nav-item">
                                <a href="#" class="nav-link">Blank page</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Faq</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Invoice</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Profile</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Timeline</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="collapse" href="#authPages" role="button" aria-expanded="false" aria-controls="authPages">
                        <i class="link-icon" data-feather="unlock"></i>
                        <span class="link-title">Authentication</span>
                        <i class="link-arrow" data-feather="chevron-down"></i>
                    </a>
                    <div class="collapse" id="authPages">
                        <ul class="nav sub-menu">
                            <li class="nav-item">
                                <a href="#" class="nav-link">Login</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Register</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="collapse" href="#errorPages" role="button" aria-expanded="false" aria-controls="errorPages">
                        <i class="link-icon" data-feather="cloud-off"></i>
                        <span class="link-title">Error</span>
                        <i class="link-arrow" data-feather="chevron-down"></i>
                    </a>
                    <div class="collapse" id="errorPages">
                        <ul class="nav sub-menu">
                            <li class="nav-item">
                                <a href="#" class="nav-link">404</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">500</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item nav-category">Docs</li>
                <li class="nav-item">
                    <a href="https://www.nobleui.com/html/documentation/docs.html" target="_blank" class="nav-link">
                        <i class="link-icon" data-feather="hash"></i>
                        <span class="link-title">Documentation</span>
                    </a>
                </li>
            </ul>
        </div>        
    </div>
</template>