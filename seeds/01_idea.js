
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE idea RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('idea').insert([
        {title: "The Pilot and the Killer", author: "Forrest Butler", idea: `Brett is a killer fuelled by greed, who murders children and posts their feet to their friends. Lady Syers, a pilot from Alaska, knows she has to stop him. It turns out the entire plot has been in Syers's imagination.`, rating:5.5 , adopted: true},
        {title: "The Corruption of War", author: "May Barrett", idea: `When a virgin from Wales decides to join the army, not everybody is supportive. However, her fortunes improve when her gardener buys a set of earplugs. Eventually, the virgin becomes corrupted by power and wealth, bringing about her own downfall.`, rating:6 , adopted: false},
        {title: "Food and Family", author: "Joann Jimenez", idea: `A chef from Ohio is delighted when he gets the chance to take part in the final of Bake Off. However, his chances are scuppered when his sister is badly injured in a car accident. After the drama, the chef realises there is more to life than winning Bake Off and goes on a picninc with his sister instead.`, rating:0 , adopted: false},
        {title: "Respectful Robots", author: "Anita Lucas", idea: `In a world where robots are warriors, one writer has no choice but to bring down the goverment using a magic ring. Eventually, the writer forms an army and teaches the robots a little respect.`, rating:10, adopted: true},
        {title: "The Heights of Friendship", author: "Garrett King", idea: `When a student from Brazil develops a fear of height, not everybody is supportive. However, his fortunes improve when his neighbour becomes a politician. The student realises his neighbour is a true friend and they ride off into the sunset together.`, rating:0 , adopted: false},
        {title: "All Our Grains", author: "Tim Figueroa", idea: `Mathias is a farmer from Australia who falls in love with his arch enemy. The two are separated when the arch enemy decides the relationship is inappropriate. Mathias turns to drink then accidentally runs his arch enemy over.`, rating:3 , adopted: true},
        {title: "Youth and Folly", author: "Jesse Webb", idea: `A man in his eighties, who is very eccentric. A young man in his late teens, who is very helpful. The story begins in a police station. Someone takes the law into their own hands. It's a story about jealousy. Your character is not afraid to get involved`, rating:6.7 , adopted: false},
        {title: "Time for Love", author: "Bertha Roberson", idea: `An older man who repairs grandfather clocks starts to fall in love with the recently widowed owner of the cupcake shop. Trouble in their pasts starts to disrupt their affections for each other.`, rating:8.2 , adopted: false},
        {title: "Write Me Right", author: "Archie Norris", idea: `An ex-girlfriend of a novelist eagerly reads each of his new books, waiting to find a character based on her. But when she does, she’s depicted as a liar, thief, and pedophile. She gets her revenge.`, rating:4 , adopted: true},
        {title: "On Her Own", author: "Aubrey Foster", idea: `A 18-year-old woman who has grown up in a polygamous Mormon community just outside St. George, Utah, decides she wants to leave just before she’s betrothed to a much older man with three wives.`, rating:0 , adopted:false}
      ]);
    });
};
