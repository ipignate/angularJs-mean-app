namespace zoo.Services {
  export class animalService {
      private animalResource;

      public getAnimals() {
        return this.animalResource.query()
      }

      public saveAnimal(animal) {
        return this.animalResource.save(animal).$promise;
      }

      public getAnimal(id){
        return this.animalResource.get({id: id});
      }

      public deleteAnimal(id){
        return this.animalResource.delete({id:id}).$promise;
      }

      constructor($resource:ng.resource.IResourceService) {
        this.animalResource = $resource('/api/animals/:id');
      }
    }
    angular.module('zoo')
           .service('animalService',animalService)
}
