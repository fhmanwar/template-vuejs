<template>
    <div class="sidebar-dark">
    <div class="main-wrapper">

        <dashboard-sidebar :type="$route.meta.side-bar"></dashboard-sidebar>
        <div class="page-wrapper">
            <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

            <div class="page-content">
                <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
                    <div>
                        <h4 class="mb-3 mb-md-0">@yield('head-title')</h4>
                    </div>
                    <div class="d-flex align-items-center flex-wrap text-nowrap">
                        <div class="input-group date datepicker dashboard-date mr-2 mb-2 mb-md-0 d-md-none d-xl-flex" id="dashboardDate">
                            <span class="input-group-addon bg-transparent">
                                <i data-feather="calendar" class=" text-primary"></i>
                            </span>
                            <input type="text" class="form-control">
                        </div>
                        <button type="button" class="btn btn-outline-info btn-icon-text mr-2 d-none d-md-block">
                            <i class="btn-icon-prepend" data-feather="download"></i>
                            Import
                        </button>
                        <button type="button" class="btn btn-outline-primary btn-icon-text mr-2 mb-2 mb-md-0">
                            <i class="btn-icon-prepend" data-feather="printer"></i>
                            Print
                        </button>
                        <button type="button" class="btn btn-primary btn-icon-text mb-2 mb-md-0">
                            <i class="btn-icon-prepend" data-feather="download-cloud"></i>
                            Download Report
                        </button>
                    </div>
                </div>
                <nav class="page-breadcrumb">
                    <ol class="breadcrumb">
                        @yield('page')
					</ol>
				</nav>
                 <div @click="$sidebar.displaySidebar(false)">
                    <fade-transition :duration="200" origin="center top" mode="out-in">
                    <!-- your content here -->
                        <router-view></router-view>
                    </fade-transition>
                </div>
            </div>

            <!-- partial:partials/_footer.html -->
            <footer class="footer d-flex flex-column flex-md-row align-items-center justify-content-between">
                <p class="text-muted text-center text-md-left">Copyright © 2020 <a href="https://www.nobleui.com"
                        target="_blank">NobleUI</a>. All rights reserved</p>
                <p class="text-muted text-center text-md-left mb-0 d-none d-md-block">Handcrafted With <i
                        class="mb-1 text-primary ml-1 icon-small" data-feather="heart"></i></p>
            </footer>
            <!-- partial -->

        </div>
    </div>

</template>

<script>
    /* eslint-disable no-new */
    import PerfectScrollbar from 'perfect-scrollbar';
    import 'perfect-scrollbar/css/perfect-scrollbar.css';

    function hasElement(className) {
        return document.getElementsByClassName(className).length > 0;
    }

    function initScrollbar(className) {
        if (hasElement(className)) {
            new PerfectScrollbar(`.${className}`);
        } else {
            // try to init it later in case this component is loaded async
            setTimeout(() => {
                initScrollbar(className);
            }, 100);
        }
    }

    import DashboardNavbar from './Navbar.vue';
    import DashboardSidebar from './Sidebar.vue';
    import DashboardContent from './Content.vue';
    import { FadeTransition } from 'vue2-transitions';

    export default {
        components: {
            DashboardNavbar,
            DashboardSidebar,
            DashboardContent,
            FadeTransition
        },
        methods: {
            initScrollbar() {
                let isWindows = navigator.platform.startsWith('Win');
                if (isWindows) {
                    initScrollbar('sidenav');
                }
            }
        },
        mounted() {
            this.initScrollbar()
        }
    };
</script>

<style>
    @import '../assets/css/style.css';
</style>