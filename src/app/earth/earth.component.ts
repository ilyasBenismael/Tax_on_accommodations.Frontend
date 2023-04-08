import {Component, OnInit} from '@angular/core';
import {TaxeTrimService} from "../controller/service/taxe-trim.service";
import {EarthService} from "../controller/service/earth.service";
import {Redevablee} from "../controller/model/redevablee";
import {Local} from "../controller/model/local";

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css']
})
export class EarthComponent implements OnInit {

  redevables: Array<Redevablee> = new Array<Redevablee>();
  locals: Array<Local> = new Array<Local>();
  visibleLocals: Array<Local> = new Array<Local>();
  localVisible: boolean = false;

  cin: String = "";

  cinSelected: boolean = false;

  visible: String = "earth";

  keshLN: any = 0;

  secteurs = new Map();
  quartiers = new Map();
  rues = new Map();


  constructor(private earthService: EarthService) {
  }


  ngOnInit() {
    this.secteurs.set("cs1", 0);
    this.secteurs.set("cs2", 0);
    this.secteurs.set("cs3", 0);
    this.quartiers.set("cq1", 0);
    this.quartiers.set("cq2", 0);
    this.quartiers.set("cq3", 0);
    this.quartiers.set("cq4", 0);
    this.quartiers.set("cq5", 0);
    this.quartiers.set("cq6", 0);
    this.rues.set("cr1", 0);
    this.rues.set("cr2", 0);
    this.rues.set("cr3", 0);
    this.rues.set("cr4", 0);
    this.rues.set("cr5", 0);
    this.rues.set("cr6", 0);
    this.rues.set("cr7", 0);
    this.rues.set("cr8", 0);
    this.rues.set("cr9", 0);
    this.rues.set("cr10", 0);
    this.rues.set("cr11", 0);
    this.rues.set("cr12", 0);
    this.findAllRedevables();
    this.countAll("");
  }

  findRedevableByCin(cin: String): void {
    this.earthService.findRedevablebyCin(cin).subscribe(data => {
      this.redevables = new Array<Redevablee>();
      this.redevables.push(data)
    })
  }

  findAllRedevables(): void {
    this.earthService.findAllRedevable().subscribe(data => {
      this.redevables = data;
    })
  }

  countAll(cin: String) {
    this.cin = cin;
    if (cin.toString().trim() == "") {
      this.findAllRedevables();
      this.cinSelected = false;
      this.earthService.findAllLocals().subscribe(data => {
        this.keshLN = data.length;
      })
    } else {
      this.cinSelected = true;
      this.earthService.findLocalbyCin(cin).subscribe(data => {
        this.keshLN = data.length;
      })
    }
    this.countSecteur(cin);
    this.countQuartier(cin);
    this.countRue(cin);
  }


  countSecteur(cin: String) {
    if (cin.toString().trim() != "") {
      for (let code of this.secteurs.keys()) {
        this.earthService.findByCinAndSecteur(cin, code).subscribe(data => {
          this.secteurs.set(code, data.length);
        })
      }
    } else {
      for (let code of this.secteurs.keys()) {
        this.earthService.findBySecteur(code).subscribe(data => {
          this.locals = data;
          this.secteurs.set(code, this.locals.length);
        })
      }
    }
  }

  countQuartier(cin: String) {
    if (cin.toString().trim() != "") {
      for (let code of this.quartiers.keys()) {
        this.earthService.findByCinAndQuartier(cin, code).subscribe(data => {
          this.locals = data;
          this.quartiers.set(code, this.locals.length);
        })
      }
    } else {
      for (let code of this.quartiers.keys()) {
        this.earthService.findByQuartier(code).subscribe(data => {
          this.locals = data;
          this.quartiers.set(code, this.locals.length);
        })
      }
    }
  }

  countRue(cin: String) {
    if (cin.toString().trim() != "") {
      for (let code of this.rues.keys()) {
        this.earthService.findByCinAndRue(cin, code).subscribe(data => {
          this.rues.set(code, data.length);
        })
      }
    } else {
      for (let code of this.rues.keys()) {
        this.earthService.findByRue(code).subscribe(data => {
          this.rues.set(code, data.length);
        })
      }
    }
  }


  hidelocs() {
    this.visibleLocals=new Array<Local>();
    this.localVisible = false;
  }


  showlocs(codeT: any, code: any) {
    this.localVisible = true;
    if (this.cinSelected) {
      if (codeT == 1) {
        this.earthService.findByCinAndSecteur(this.cin.toString().trim(), 'cs'+code).subscribe(data => {
          this.visibleLocals = data;
        })
      }
      if (codeT == 2) {
        this.earthService.findByCinAndQuartier(this.cin, 'cq'+code).subscribe(data => {
          this.visibleLocals = data;
        })
      }
      if (codeT == 3) {
        this.earthService.findByCinAndRue(this.cin,'cr'+code).subscribe(data => {
          this.visibleLocals = data;
        })
      }
    } else {
      if (codeT == 1) {
        this.earthService.findBySecteur('cs'+code).subscribe(data => {
          this.visibleLocals = data;
          console.log(code);
        })
      }
      if (codeT == 2) {
        this.earthService.findByQuartier('cq'+code).subscribe(data => {
          this.visibleLocals = data;
        })
      }
      if (codeT == 3) {
        this.earthService.findByRue('cr'+code).subscribe(data => {
          this.visibleLocals = data;
        })
      }
    }
  }


  show(placeN: String) {
    this.localVisible = false;
    this.visible = placeN;
  }
}
