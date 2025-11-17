import { Component } from '@angular/core';
interface Person {
  name: string;
  age: number;
  bio: string;
  status: boolean;
  reputation: string;
}

@Component({
  selector: 'app-property-attribute-binding',
  imports: [],
  templateUrl: './property-attribute-binding.html',
  styleUrl: './property-attribute-binding.css',
})
export class PropertyAttributeBinding {
  // 🟦 Variables pour Property Binding

  person: Person = {
    name: 'Steven Cigale',
    age: 25,
    bio: 'Steven Cigale is a French film producer, screenwriter, and director. He is best known for his work in the 2000s and 2010s.',
    status: false,
    reputation: 'Ringard',
  };
}
