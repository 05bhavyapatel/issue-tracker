import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform(projects: any[], searchText: string): any[] {
    if (!projects) return [];
    if (!searchText) return projects;

    searchText = searchText.toLowerCase();
    return projects.filter(project => project.name.toLowerCase().includes(searchText));
  }

}
