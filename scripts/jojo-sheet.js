class JojoCharacterSheet extends dnd5e.applications.actor.ActorSheet5eCharacter {
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        template: "modules/jojo-character-sheet/templates/jojo-sheet.html",
        classes: ["jojo-sheet", "dnd5e", "sheet", "actor"],
      });
    }
  
    async getData() {
      const data = await super.getData();
      data.actor.system.attributes.ripplePoints = data.actor.flags["jojo-character-sheet"]?.ripplePoints || 0;
      data.actor.system.attributes.spinDC = data.actor.flags["jojo-character-sheet"]?.spinDC || 10;
      data.actor.system.attributes.standName = data.actor.flags["jojo-character-sheet"]?.standName || "The World";
      data.actor.system.attributes.standEnergy = data.actor.flags["jojo-character-sheet"]?.standEnergy || 100;
      return data;
    }
  }
  
  Actors.registerSheet("dnd5e", JojoCharacterSheet, { makeDefault: false });
  