app.service('craftsService', function () {
  this.getCrafts = function () {
    return crafts;
  };

  this.getCraft = function (id) {
    for (var i = 0; i < crafts.length; i++) {
      if (crafts[i].id === id) {
          return crafts[i];
      }
    }
    return null;
  };

  var crafts = [
    {
        id: 1,
        name: 'John Lennon',
        img: 'img/IMG_3151.jpg',
        description: 'John Lennon was a fucking wifebeater',
        longer_description: '',
        craft_used: 'Textile, sewing machine'
    },
      {
          id: 2,
          name: 'Roman Polanski',
          img: 'img/IMG_3112.jpg',
          description: 'Roman Polanski is banned from the U.S. for drugging and raping a 13 year old girl',
          longer_description: '',
          craft_used: 'Embroidery thread, friendship bracelets'
      },
      {
          id: 16,
          name: 'Phil Spector',
          img: 'img/IMG_3116.jpg',
          description: 'Phil Spector is a murderer',
          longer_description: '',
          craft_used: 'Latch hook, yarn'
      },
      {
          id: 17,
          name: 'Jian Ghomeshi',
          img: 'img/IMG_3129.jpg',
          description: 'Jian Ghomeshi beats and rapes women',
          longer_description: '',
          craft_used: 'Alphabet letters, loom, yarn'
      },
      {
          id: 18,
          name: 'Gary Oldman',
          img: 'img/IMG_3124.jpg',
          description: 'Gary Oldman tried to strangle his wife',
          longer_description: '',
          craft_used: 'Paint, tie'
      },
      {
          id: 31,
          name: 'Alfred Hitchcock',
          img: 'img/IMG_3650.jpg',
          description: 'Alfred Hitchcock was a possessive manipulative monster',
          longer_description: '',
          craft_used: 'Bell jar charm, alphabet beads, jewelry thread'
      },
      {
          id: 3,
          name: 'Chris Brown',
          img: 'img/IMG_3144.jpg',
          description: 'Fuck Chris Brown',
          longer_description: '',
          craft_used: 'Yarn, crochet'
      },
      {
          id: 4,
          name: 'Vanilla Ice',
          img: 'img/IMG_3137.jpg',
          description: 'Vanilla Ice was arrested on domestic abuse charges. Twice.',
          longer_description: '',
          craft_used: 'Iron-on letters, iron, sweatpants'
      },
      {
          id: 6,
          name: 'Christian Slater',
          img: 'img/IMG_3113.jpg',
          description: 'Christian Slater punched his girlfriend in the face repeatedly. He went to jail for three months.',
          longer_description: '',
          craft_used: 'Alphabet beads'
      },
      {
          id: 7,
          name: 'Michael Fassbender',
          img: 'img/IMG_3119.jpg',
          description: 'Michael Fassbender’s ex-girlfriend filed a restraining order against him for breaking her nose.',
          longer_description: '',
          craft_used: 'Concrete, alphabet set'
      },
      {
          id: 5,
          name: 'Bill Cosby',
          img: 'img/IMG_3143.jpg',
          description: 'Bill Cosby drugged & raped over 4 dozen women',
          longer_description: '',
          craft_used: 'Embroidery, sweater'
      },
      {
          id: 8,
          name: 'Elvis Presley',
          img: 'img/IMG_3126.jpg',
          description: 'Elvis liked girls best',
          longer_description: '',
          craft_used: 'Wood alphabet set, ribbon'
      },
      {
          id: 9,
          name: 'Nicholas Cage',
          img: 'img/IMG_3118.jpg',
          description: 'Nic Cage was arrested after a drunken assault on his wife',
          longer_description: '',
          craft_used: 'Concrete, paint, engraving'
      },
      {
          id: 10,
          name: 'Dr Luke',
          img: 'img/IMG_3128.jpg',
          description: 'Dr Luke is a fucking rapist',
          longer_description: '',
          craft_used: 'Stick-on glitter letters, underwear'
      },
      {
          id: 11,
          name: 'Tommy Lee',
          img: 'img/IMG_3150.jpg',
          description: 'Tommy Lee served four months in prison for kicking his wife while she held their infant son',
          longer_description: '',
          craft_used: 'Tattoo practice skin, India ink, needle'
      },
      {
          id: 23,
          name: 'Victor Salva',
          img: 'img/IMG_3639.jpg',
          description: 'Victor Salva was convicted of child molestation and still has a career',
          longer_description: '',
          craft_used: 'Crayola Model Magic, Elmers glue'
      },
      {
          id: 12,
          name: 'Louis C.K.',
          img: 'img/IMG_3125.jpg',
          description: 'Louis C.K. is a creep',
          longer_description: '',
          craft_used: 'Rubber bands'
      },
      {
          id: 13,
          name: 'Woody Allen',
          img: 'img/IMG_3121.jpg',
          description: 'Ask Dylan Farrow about Woody Allen',
          longer_description: '',
          craft_used: 'Beads, alphabet beads, beading loom'
      },
      {
          id: 19,
          name: 'Sid Vicious',
          img: 'img/IMG_3115.jpg',
          description: 'Sid killed Nancy',
          longer_description: '',
          craft_used: 'Buttons, permanent marker'
      },
      {
          id: 25,
          name: 'Pablo Picasso',
          img: 'img/IMG_3641.jpg',
          description: 'Pablo Picasso was a misogynist!',
          longer_description: '',
          craft_used: 'Acrylic paint, canvas, pen'
      },
      {
          id: 14,
          name: 'Johnny Depp',
          img: 'img/IMG_3132.jpg',
          description: 'Johnny Depp is a wifebeater forever',
          longer_description: '',
          craft_used: 'Wood, wine (for staining), glue'
      },
      {
          id: 20,
          name: 'Sean Connery',
          img: 'img/IMG_3148.jpg',
          description: '\"I don’t think there is anything particularly wrong about hitting a woman...if a woman is a bitch, or hysterical, or bloody-minded continually, then I\'d do it.\” — Sean Connery',
          longer_description: 'Sometimes, they speak for themselves.',
          craft_used: 'Embroidery'
      },
      {
          id: 22,
          name: 'Mike Tyson',
          img: 'img/IMG_3109.jpg',
          description: 'Mike Tyson / Total asshole',
          longer_description: '',
          craft_used: 'Wax, x-acto knife'
      },
      {
          id: 24,
          name: 'William S. Burroughs',
          img: 'img/IMG_3640.jpg',
          description: 'William S. Burroughs killed his wife',
          longer_description: '',
          craft_used: 'Construction paper, x-acto knife'
      },

      {
          id: 26,
          name: 'J. J. Paulsen',
          img: 'img/IMG_3643.jpg',
          description: 'J.J. Paulsen beat his wife to death and hid her body in an attic',
          longer_description: '',
          craft_used: 'Acrylic paint, mug'
      },
      {
          id: 27,
          name: 'Don Henley',
          img: 'img/IMG_3644.jpg',
          description: 'Don Henley drugged two teen girls',
          longer_description: '',
          craft_used: 'Embroidery thread'
      },
      {
          id: 28,
          name: 'R. Kelly',
          img: 'img/IMG_3645.jpg',
          description: 'R Kelly has raped many underage women',
          longer_description: '',
          craft_used: 'Embroidery thread, alphabet beads'
      },
      {
          id: 21,
          name: 'Ike Turner',
          img: 'img/IMG_3147.jpg',
          description: '\"Yeah I hit her, but I didn\'t hit her more than the average guy beats his wife.\” — Ike Turner',
          longer_description: 'Sometimes, they speak for themselves.',
          craft_used: 'Embroidery'
      },
      {
          id: 29,
          name: 'Ian Watkins',
          img: 'img/IMG_3647.jpg',
          description: 'Ian Watkins is a pedophile',
          longer_description: '',
          craft_used: 'Perler beads, embroidery thread'
      },
      {
          id: 32,
          name: 'Steven Seagal',
          img: 'img/IMG_3653.jpg',
          description: 'Steven Seagal is a sexual predator ',
          longer_description: '',
          craft_used: 'Linoleum, chisel knives'
      },
      {
          id: 33,
          name: 'Jean Claude Van Damme',
          img: 'img/IMG_3654.jpg',
          description: 'Jean Claude Van Damme beat up his wife',
          longer_description: '',
          craft_used: 'Linoleum, chisel knives'
      },
      {
          id: 30,
          name: 'Errol Flynn',
          img: 'img/IMG_3649.jpg',
          description: 'Errol Flynn / Underage girls',
          longer_description: '',
          craft_used: 'Earring hooks, alphabet beads, jewelry thread'
      },
      {
          id: 15,
          name: 'Mel Gibson',
          img: 'img/IMG_3127.jpg',
          description: 'Mel Gibson beat his girlfriend',
          longer_description: '',
          craft_used: 'Flower headband, wooden letters, glue'
      },
      {
          id: 34,
          name: 'Jimmy Page',
          img: 'img/IMG_4543.jpg',
          description: 'Jimmy Page kidnapped a 14 year old girl so he could fuck her',
          longer_description: '',
          craft_used: 'Tie-dye, sharpie pen'
      }
  ];
});
