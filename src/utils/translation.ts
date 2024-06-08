export const parsePage = (value: string | undefined) => {
  if (!value) return;

  switch (value.toUpperCase()) {
    case 'VILLAGERS':
      return '주민';
    case 'FURNITURE':
      return '가구';
    case 'FASHION':
      return '의상';
    case 'COLLECTION':
      return '도감';
    case 'CONSTRUCTION':
      return '건설';
    case 'CATALOG':
      return '기타';
    default:
      return value;
  }
};

export const parsePersonality = (value: string | undefined) => {
  if (!value) return;

  switch (value.toUpperCase()) {
    case 'BIG SISTER':
      return '단순활발';
    case 'CRANKY':
      return '무뚝뚝';
    case 'JOCK':
      return '운동광';
    case 'LAZY':
      return '먹보';
    case 'NORMAL':
      return '친절함';
    case 'PEPPY':
      return '아이돌';
    case 'SISTERLY':
      return '친절함';
    case 'SMUG':
      return '느끼함';
    case 'SNOOTY':
      return '성숙함';
    default:
      return '';
  }
};

export const parseGender = (value: string | undefined) => {
  if (!value) return;

  switch (value.toUpperCase()) {
    case 'MALE':
      return '수컷';
    case 'FEMALE':
      return '암컷';
    default:
      return '';
  }
};

export const parseStyle = (value: string | undefined) => {
  if (!value) return;

  switch (value.toUpperCase()) {
    case 'ACTIVE':
      return '활동적인';
    case 'COOL':
      return '멋진';
    case 'CUTE':
      return '귀여운';
    case 'ELEGANT':
      return '우아한';
    case 'GORGEOUS':
      return '화려한';
    case 'SIMPLE':
      return '단순한';
    default:
      return '';
  }
};

export const parseSpecies = (value: string | undefined) => {
  if (!value) return;

  switch (value.toUpperCase()) {
    case 'ALLIGATOR':
      return '악어';
    case 'ANTEATER':
      return '개미핥기';
    case 'BEAR':
      return '곰';
    case 'BEAR CUB':
      return '아기 곰';
    case 'GORGEOUS':
      return '화려한';
    case 'BIRD':
      return '새';
    case 'BULL':
      return '황소';
    case 'CAT':
      return '고양이';
    case 'CHICKEN':
      return '닭';
    case 'DEER':
      return '사슴';
    case 'DUCK':
      return '오리';
    case 'EAGLE':
      return '독수리';
    case 'ELEPHANT':
      return '코끼리';
    case 'FROG':
      return '개구리';
    case 'GOAT':
      return '염소';
    case 'GORILLA':
      return '고릴라';
    case 'HAMSTER':
      return '햄스터';
    case 'HIPPO':
      return '하마';
    case 'HORSE':
      return '말';
    case 'MONKEY':
      return '원숭이';
    case 'LION':
      return '사자';
    case 'MOUSE':
      return '생쥐';
    case 'OCTOPUS':
      return '문어';
    case 'OSTRICH':
      return '타조';
    case 'PENGUIN':
      return '펭귄';
    case 'PIG':
      return '돼지';
    case 'RABBIT':
      return '토끼';
    case 'RHINO':
      return '코뿔소';
    case 'RHINOCEROS':
      return '코뿔소';
    case 'SHEEP':
      return '양';
    case 'SQUIRREL':
      return '다람쥐';
    case 'TIGER':
      return '호랑이';
    case 'WOLF':
      return '늑대';
    default:
      return '';
  }
};

export const parseFashionSourceSheet = (value: string | undefined) => {
  if (!value) return;

  switch (value.toUpperCase()) {
    case 'TOPS':
      return '상의';
    case 'BOTTOMS':
      return '하의';
    case 'DRESS-UP':
      return '한벌';
    case 'HEADWEAR':
      return '모자';
    case 'ACCESSORIES':
      return '장식품';
    case 'SOCKS':
      return '양말';
    case 'SHOES':
      return '신발';
    case 'BAGS':
      return '가방';
    case 'UMBRELLAS':
      return '우산';
    case 'CLOTHING OTHER':
      return '잠수복';
    default:
      return '';
  }
};

export const parseFashionThemes = (value: string | undefined) => {
  if (!value) return;

  switch (value.toUpperCase()) {
    case 'COMFY':
      return '릴랙스';
    case 'EVERYDAY':
      return '데일리';
    case 'FAIRY TALE':
      return '메르헨';
    case 'FORMAL':
      return '포멀';
    case 'GOTH':
      return '호러';
    case 'OUTDOORSY':
      return '아웃도어';
    case 'PARTY':
      return '파티';
    case 'SPORTY':
      return '스포츠';
    case 'THEATRICAL':
      return '스테이지';
    case 'VACATION':
      return '바캉스';
    case 'WORK':
      return '비즈니스';
    default:
      return '';
  }
};

export const parseColor = (value: string | undefined | null) => {
  if (!value) return;

  switch (value.toUpperCase()) {
    case 'AQUA':
      return '아쿠아';
    case 'BEIGE':
      return '베이직';
    case 'BLACK':
      return '블랙';
    case 'BLUE':
      return '블루';
    case 'BROWN':
      return '브라운';
    case 'COLORFUL':
      return '화려한';
    case 'GRAY':
      return '그레이';
    case 'GREEN':
      return '스포츠';
    case 'ORANGE':
      return '오렌지';
    case 'PINK':
      return '핑크';
    case 'PURPLE':
      return '퍼플';
    case 'RED':
      return '레드';
    case 'WHITE':
      return '화이트';
    case 'YELLOW':
      return '옐로';
    default:
      return '';
  }
};

export const parseFurnitureSourceSheets = (
  value: string | undefined | null
) => {
  if (!value) return;

  switch (value.toUpperCase()) {
    case 'MISCELLANEOUS':
      return '잡화';
    case 'HOUSEWARES':
      return '가구';
    case 'WALLPAPER':
      return '벽지';
    case 'FLOORS':
      return '바닥';
    case 'RUGS':
      return '러그';
    case 'PHOTOS':
      return '사진';
    case 'WALL-MOUNTED':
      return '포스터';
    case 'CEILING DECOR':
      return '천장 장식';
    default:
      return '';
  }
};

export const parseTag = (value: string | undefined | null) => {
  if (!value) return;

  switch (value.toUpperCase()) {
    case 'DISHDRINK':
      return '음료';
    case 'DISHFOOD':
      return '음식';
    default:
      return '';
  }
};

export const parseCatalogSourceSheets = (value: string | undefined | null) => {
  if (!value) return;

  switch (value.toUpperCase()) {
    case 'MESSAGE CARDS':
      return '편지지';
    case 'MUSIC':
      return '음악';
    case 'OTHER':
      return '기타';
    case 'FOSSILS':
      return '화석';
    case 'ARTWORK':
      return '미술';
    case 'GYROIDS':
      return '토용';
    case 'TOOLS/GOODS':
      return '도구';
    default:
      return '';
  }
};

export const parseCollectionSourceSheets = (
  value: string | undefined | null
) => {
  if (!value) return;

  switch (value.toUpperCase()) {
    case 'FISH':
      return '물고기';
    case 'INSECTS':
      return '곤충';
    case 'SEA CREATURES':
      return '해산물';
    default:
      return '';
  }
};

export const parseHemispheres = (value: string | undefined | null) => {
  if (!value) return;

  switch (value.toUpperCase()) {
    case 'NORTH':
      return '북방구';
    case 'SOUTH':
      return '남방구';
    default:
      return '';
  }
};

export const parseMonth = (value: string | undefined | null) => {
  if (!value) return;

  switch (value.toUpperCase()) {
    case 'JAN':
      return '1월';
    case 'FEB':
      return '2월';
    case 'MAR':
      return '3월';
    case 'APR':
      return '4월';
    case 'MAY':
      return '5월';
    case 'JUN':
      return '6월';
    case 'JUL':
      return '7월';
    case 'AUG':
      return '8월';
    case 'SEP':
      return '9월';
    case 'OCT':
      return '10월';
    case 'NOV':
      return '11월';
    case 'DEC':
      return '12월';
    default:
      return '';
  }
};

export const parseCategory = (value: string | undefined | null) => {
  if (!value) return;

  switch (value.toUpperCase()) {
    case 'DOOR':
      return '문';
    case 'MAILBOX':
      return '우편함';
    case 'ROOFING':
      return '지붕';
    case 'SIDING':
      return '외벽';
    case 'INCLINE':
      return '계단';
    case 'BRIDGE':
      return '다리';
    default:
      return '외형';
  }
};
