import {Genre} from '@/types/types';

export default (genre: Genre) => {
  return {
    fantasy: 'Фэнтези',
    horror: 'Хоррор',
    action: 'Экшн',
    comedy: 'Комедия',
  }[genre]
}
