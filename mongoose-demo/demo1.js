const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000/test');

const Cat = mongoose.model('Cat', { name: String });

for(var i=0; i<100; i++) {
    const kitty = new Cat({ name: 'Zildjian' + i });
    kitty.save().then(() => console.log('meow'));
}
