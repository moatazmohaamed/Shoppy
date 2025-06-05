import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/ecommerce/ecommerce.component').then(
        (m) => m.EcommerceComponent
      ),
    title: 'E-commerce Dashboard',
  },
  {
    path: 'ecommerce',
    loadComponent: () =>
      import('./pages/ecommerce/ecommerce.component').then(
        (m) => m.EcommerceComponent
      ),
    title: 'E-commerce Dashboard',
  },

  // Pages
  {
    path: 'orders',
    loadComponent: () =>
      import('./pages/orders/orders.component').then((m) => m.OrdersComponent),
    title: 'Orders',
  },
  {
    path: 'employees',
    loadComponent: () =>
      import('./pages/emplooyees/emplooyees.component').then((m) => m.default),
    title: 'Employees',
  },
  {
    path: 'customers',
    loadComponent: () =>
      import('./pages/customers/customers.component').then(
        (m) => m.CustomersComponent
      ),
    title: 'Customers',
  },

  // Apps
  {
    path: 'kanban',
    loadComponent: () =>
      import('./pages/kanban/kanban.component').then((m) => m.KanbanComponent),
    title: 'Kanban Board',
  },
  {
    path: 'editor',
    loadComponent: () =>
      import('./pages/editor/editor.component').then((m) => m.EditorComponent),
    title: 'Editor',
  },
  {
    path: 'calendar',
    loadComponent: () =>
      import('./pages/calender/calender.component').then(
        (m) => m.CalenderComponent
      ),
    title: 'Calendar',
  },
  {
    path: 'color-picker',
    loadComponent: () =>
      import('./pages/color-picker/color-picker.component').then(
        (m) => m.ColorPickerComponent
      ),
    title: 'Color Picker',
  },

  // Charts
  {
    path: 'line',
    loadComponent: () =>
      import('./pages/Charts/line/line.component').then((m) => m.LineComponent),
    title: 'Line Chart',
  },
  {
    path: 'area',
    loadComponent: () =>
      import('./pages/Charts/area/area.component').then((m) => m.AreaComponent),
    title: 'Area Chart',
  },
  {
    path: 'bar',
    loadComponent: () =>
      import('./pages/Charts/bar/bar.component').then((m) => m.BarComponent),
    title: 'Bar Chart',
  },
  {
    path: 'pie',
    loadComponent: () =>
      import('./pages/Charts/pie/pie.component').then((m) => m.PieComponent),
    title: 'Pie Chart',
  },
  {
    path: 'financial',
    loadComponent: () =>
      import('./pages/Charts/financial/financial.component').then(
        (m) => m.FinancialComponent
      ),
    title: 'Financial Chart',
  },
  {
    path: 'color-mapping',
    loadComponent: () =>
      import('./pages/Charts/color-mapping/color-mapping.component').then(
        (m) => m.ColorMappingComponent
      ),
    title: 'Color Mapping',
  },
  {
    path: 'pyramid',
    loadComponent: () =>
      import('./pages/Charts/pyramid/pyramid.component').then(
        (m) => m.PyramidComponent
      ),
    title: 'Pyramid Chart',
  },
  {
    path: 'forecast',
    loadComponent: () =>
      import('./pages/Charts/forecast/forecast/forecast.component').then(
        (m) => m.ForecastComponent
      ),
    title: 'Forecast',
  },
];
