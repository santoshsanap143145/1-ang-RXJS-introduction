import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { PostsComponent } from "./shared/components/posts/posts.component";
import { TodosComponent } from "./shared/components/todos/todos.component";
import { ObservablesDetailsComponent } from "./shared/components/observables-details/observables-details.component";
import { SubjectObservableTypeComponent } from "./shared/components/subject-observable-type/subject-observable-type.component";


const routes : Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: 'todos',
        component: TodosComponent
    },
    {
        path: 'observables',
        component: ObservablesDetailsComponent
    },
    {
        path: 'subject',
        component: SubjectObservableTypeComponent
    },
]


@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule {

}