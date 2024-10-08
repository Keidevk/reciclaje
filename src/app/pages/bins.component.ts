import { Component } from "@angular/core";

@Component({
  selector:'bins-component',
  standalone:true,
  imports: [],
  template:`
  @defer{
  <div class="flex absolute z-10 flex-wrap sm:flex-nowrap justify-center h-[80vh] mt-8" >
    <div>
      <div class="grid justify-around">
        <img src="/marron.jpeg" alt="bin brown" class="m-auto w-40"/>
        <p class="w-52 h-7 text-center border-t-2 border-t-black animate-pulse" [style.display]="showed ? 'none':'block'" (click)="toggleImageSizeBrown()">Mostrar Informción</p>
      </div>
      <div [style.opacity]="isImageEnlargedbrow ? 1 : 0"
      class="p-4 transition ease-in-out duration-300 transform bg-white rounded-lg">
        <h2 class="text-2xl font-bold text-center">Papelera de Cartón</h2>
        <ul>
            <li>Características:
                <ul>
                    <li>1.Fabricada con cartón reciclado o material biodegradable.</li>
                    <li>2.Ligera y fácil de transportar.</li>
                    <li>3.Diseño plegable o encajable.</li>
                    <li>4.Apta para recoger papel, cartón y envases de cartón.</li>
                </ul>
            </li>
            <li>Color: Suelen ser marrones o grises.</li>
        </ul>
      </div>
    </div>
    <div>
      <div class="grid justify-around">
      <img src="/verde.jpeg" alt="bin brown" class="m-auto w-40"/>
      <p class="w-52 h-7 text-center border-t-2 border-t-black animate-pulse" [style.display]="showed ? 'none':'block'" (click)="toggleImageSizeGreen()">Mostrar Informción</p>
      </div>
      <div
        [style.opacity]="isImageEnlargedGreen ? 1 : 0"
        class="p-4 transition ease-in-out duration-300 transform bg-white rounded-lg">
        <h2 class="text-2xl font-bold text-center">Papelera de Plástico</h2>
        <ul>
          <li>Características:
              <ul>
                  <li>1.Hecha de plástico resistente.</li>
                  <li>2.Fácil de limpiar y mantener.</li>
                  <li>3.Diseño con tapa para evitar olores.</li>
                  <li>4.Adecuada para recoger envases de plástico y botellas.</li>
              </ul>
          </li>
          <li>Color: Comúnmente azules o verdes.</li>
        </ul>
      </div>
    </div>
    <div>
      <div class="grid justify-around">
        <img src="/gris.jpeg" alt="bin brown" class="m-auto w-40"/>
      <p class="w-52 h-7 text-center border-t-2 border-t-black animate-pulse" [style.display]="showed ? 'none':'block'" (click)="toggleImageSizeGray()">Mostrar Informción</p>

      </div>
      <div [style.opacity]="isImageEnlargedGray ? 1 : 0"
      class="p-4 transition ease-in-out duration-300 transform bg-white rounded-lg">
        <h2 class="text-2xl font-bold text-center">Papelera de Basura General</h2>
        <ul>
            <li>Características:
                <ul>
                    <li>1.Diseñada para residuos no reciclables.</li>
                    <li>2.Mayor capacidad que las papeleras específicas.</li>
                    <li>3.Puede tener pedal o tapa abatible.</li>
                    <li>4.Apta para desechar restos de comida, pañales, etc.</li>
                </ul>
            </li>
            <li>Color: Suelen ser grises o negras.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="-z-50">
      <div class="bg-green-custom h-52 w-full absolute top-3/4 left-0 rounded-t-full">.</div>
      <div class="bg-green-custom h-64 w-full absolute top-2/3 left-0 rounded-t-full">.</div>
      <div class="bg-green-custom h-5/6 w-full absolute top-full -left-1">.</div>
    </div>
}@placeholder {
  <div class="flex items-center justify-center h-[80vh] mt-8">
    <h1 class="text-5xl sm:text-9xl animate-pulse">Cargando...</h1>
  </div>
}
  `,
})

export class BinsComponent{
  isClicked = false;
  showed = false;
  showTheInfo() {
    this.isClicked = !this.isClicked;
    if(this.showed==false){
      this.showed = true;
    }
  }

  isImageEnlargedbrow = false;
  isImageEnlargedGreen = false;
  isImageEnlargedGray = false;
  toggleImageSizeBrown() {
    this.isImageEnlargedbrow = !this.isImageEnlargedbrow;
  }
  toggleImageSizeGreen() {
    this.isImageEnlargedGreen = !this.isImageEnlargedGreen;
  }
  toggleImageSizeGray() {
    this.isImageEnlargedGray = !this.isImageEnlargedGray;
  }
}

