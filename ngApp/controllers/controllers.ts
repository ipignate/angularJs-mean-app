namespace zoo.Controllers {

    export class HomeCtrl {
        public animals;

        constructor(private animalService: zoo.Services.animalService,
                    public $window,
                    public $location){
          this.animals = animalService.getAnimals();
        }

        public delete(id){
          this.animalService.deleteAnimal(id).then(() => {
            this.$window.$location.reload();
          })
        }
    }

    export class AddCtrl {
      public animal;

      constructor(private animalService: zoo.Services.animalService,
                  public $state
      ) {}

      public add(){
        this.animalService.saveAnimal(this.animal).then(() =>{
          this.$state.go('home');
        })
      }
    }

    export class EditCtrl {
      public animal;

      constructor(private animalService: zoo.Services.animalService,
                  public $state,
                  public $stateParams
      ) {
        var animalId = $stateParams['id'];
        this.animal = animalService.getAnimal(animalId);
      }

      public edit(){
        this.animalService.saveAnimal(this.animal).then(() =>{
          if(this.$state){
          this.$state.go('home');
        }
      })
      }
    }

}
