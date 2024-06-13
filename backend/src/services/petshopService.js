const petshops = [
    {
      name: "Meu Canino Feliz",
      distance: 2,
      prices: {
        weekday: { small: 20, large: 40 },
        weekend: { small: 24, large: 48 }
      }
    },
    {
      name: "Vai Rex",
      distance: 1.7,
      prices: {
        weekday: { small: 15, large: 50 },
        weekend: { small: 20, large: 55 }
      }
    },
    {
      name: "ChowChawgas",
      distance: 0.8,
      prices: {
        everyday: { small: 30, large: 45 }
      }
    }
  ];
  
  const isWeekend = (date) => {
    const day = new Date(date).getDay();
    return day === 0 || day === 6;
  };
  
  exports.findBestPetshop = (date, smallDogs, largeDogs) => {
    const weekend = isWeekend(date);
    let bestPetshop = null;
    let bestPrice = Infinity;
  
    petshops.forEach(petshop => {
      const prices = weekend ? petshop.prices.weekend || petshop.prices.everyday : petshop.prices.weekday || petshop.prices.everyday;
      const total = prices.small * smallDogs + prices.large * largeDogs;
  
      if (total < bestPrice || (total === bestPrice && petshop.distance < bestPetshop.distance)) {
        bestPrice = total;
        bestPetshop = petshop;
      }
    });
  
    return { petshop: bestPetshop.name, price: bestPrice };
  };
  