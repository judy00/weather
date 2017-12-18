const currentWeatherAPIData = {
  'coord': {
    'lon': 121.53,
    'lat': 25.05
  },
  'weather': [
    {
      'id': 300,
      'main': 'Drizzle',
      'description': 'light intensity drizzle',
      'icon': '09d'
    }
  ],
  'base': 'stations',
  'main': {
    'temp': 292.22,
    'pressure': 1019,
    'humidity': 88,
    'temp_min': 291.15,
    'temp_max': 293.15
  },
  'visibility': 10000,
  'wind': {
    'speed': 8.7,
    'deg': 90
  },
  'clouds': {
    'all': 75
  },
  'dt': 1513141200,
  'sys': {
    'type': 1,
    'id': 7479,
    'message': 0.0097,
    'country': 'TW',
    'sunrise': 1513117803,
    'sunset': 1513155967
  },
  'id': 1668341,
  'name': 'Taipei',
  'cod': 200
}

const forecastWeatherAPIData = {
  'cod': '200',
  'message': 0.0083,
  'cnt': 37,
  'list': [
    {
      'dt': 1513328400,
      'main': {
        'temp': 297.08,
        'temp_min': 293.788,
        'temp_max': 297.08,
        'pressure': 1022.72,
        'sea_level': 1031.71,
        'grnd_level': 1022.72,
        'humidity': 100,
        'temp_kf': 3.29
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }
      ],
      'clouds': {
        'all': 92
      },
      'wind': {
        'speed': 4.22,
        'deg': 88.5033
      },
      'rain': {
        '3h': 0.03
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2017-12-15 09:00:00'
    },
    {
      'dt': 1513339200,
      'main': {
        'temp': 295.91,
        'temp_min': 293.441,
        'temp_max': 295.91,
        'pressure': 1024.61,
        'sea_level': 1033.61,
        'grnd_level': 1024.61,
        'humidity': 100,
        'temp_kf': 2.47
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n'
        }
      ],
      'clouds': {
        'all': 88
      },
      'wind': {
        'speed': 3.77,
        'deg': 70.5004
      },
      'rain': {
        '3h': 0.05
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2017-12-15 12:00:00'
  },
  {
      'dt': 1513350000,
      'main': {
          'temp': 295.11,
          'temp_min': 293.467,
          'temp_max': 295.11,
          'pressure': 1024.57,
          'sea_level': 1033.57,
          'grnd_level': 1024.57,
          'humidity': 100,
          'temp_kf': 1.65
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10n'
          }
      ],
      'clouds': {
          'all': 100
      },
      'wind': {
          'speed': 3.86,
          'deg': 68.5034
      },
      'rain': {
          '3h': 0.07
      },
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-15 15:00:00'
  },
  {
      'dt': 1513360800,
      'main': {
          'temp': 294.41,
          'temp_min': 293.587,
          'temp_max': 294.41,
          'pressure': 1023.92,
          'sea_level': 1032.92,
          'grnd_level': 1023.92,
          'humidity': 100,
          'temp_kf': 0.82
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10n'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 3.21,
          'deg': 65.5001
      },
      'rain': {
          '3h': 0.09
      },
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-15 18:00:00'
  },
  {
      'dt': 1513371600,
      'main': {
          'temp': 292.278,
          'temp_min': 292.278,
          'temp_max': 292.278,
          'pressure': 1024.4,
          'sea_level': 1033.43,
          'grnd_level': 1024.4,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10n'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 4.07,
          'deg': 27.001
      },
      'rain': {
          '3h': 2.06
      },
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-15 21:00:00'
  },
  {
      'dt': 1513382400,
      'main': {
          'temp': 291.885,
          'temp_min': 291.885,
          'temp_max': 291.885,
          'pressure': 1026.16,
          'sea_level': 1035.18,
          'grnd_level': 1026.16,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 501,
              'main': 'Rain',
              'description': 'moderate rain',
              'icon': '10d'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 5.47,
          'deg': 25.0022
      },
      'rain': {
          '3h': 6.07
      },
      'sys': {
          'pod': 'd'
      },
      'dt_txt': '2017-12-16 00:00:00'
  },
  {
      'dt': 1513393200,
      'main': {
          'temp': 291.231,
          'temp_min': 291.231,
          'temp_max': 291.231,
          'pressure': 1026.94,
          'sea_level': 1035.97,
          'grnd_level': 1026.94,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 501,
              'main': 'Rain',
              'description': 'moderate rain',
              'icon': '10d'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 9.96,
          'deg': 15.0008
      },
      'rain': {
          '3h': 7.47
      },
      'sys': {
          'pod': 'd'
      },
      'dt_txt': '2017-12-16 03:00:00'
  },
  {
      'dt': 1513404000,
      'main': {
          'temp': 290.251,
          'temp_min': 290.251,
          'temp_max': 290.251,
          'pressure': 1026.62,
          'sea_level': 1035.78,
          'grnd_level': 1026.62,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10d'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 11.67,
          'deg': 13.5007
      },
      'rain': {
          '3h': 2.98
      },
      'sys': {
          'pod': 'd'
      },
      'dt_txt': '2017-12-16 06:00:00'
  },
  {
      'dt': 1513414800,
      'main': {
          'temp': 289.756,
          'temp_min': 289.756,
          'temp_max': 289.756,
          'pressure': 1028.05,
          'sea_level': 1037.23,
          'grnd_level': 1028.05,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10d'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 11.21,
          'deg': 15.0056
      },
      'rain': {
          '3h': 0.71
      },
      'sys': {
          'pod': 'd'
      },
      'dt_txt': '2017-12-16 09:00:00'
  },
  {
      'dt': 1513425600,
      'main': {
          'temp': 288.879,
          'temp_min': 288.879,
          'temp_max': 288.879,
          'pressure': 1030.4,
          'sea_level': 1039.61,
          'grnd_level': 1030.4,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10n'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 11.51,
          'deg': 12.0038
      },
      'rain': {
          '3h': 0.9
      },
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-16 12:00:00'
  },
  {
      'dt': 1513436400,
      'main': {
          'temp': 288.473,
          'temp_min': 288.473,
          'temp_max': 288.473,
          'pressure': 1030.7,
          'sea_level': 1039.94,
          'grnd_level': 1030.7,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10n'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 10.76,
          'deg': 15.5045
      },
      'rain': {
          '3h': 0.58
      },
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-16 15:00:00'
  },
  {
      'dt': 1513447200,
      'main': {
          'temp': 288.247,
          'temp_min': 288.247,
          'temp_max': 288.247,
          'pressure': 1030.61,
          'sea_level': 1039.72,
          'grnd_level': 1030.61,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10n'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 10.68,
          'deg': 14.5022
      },
      'rain': {
          '3h': 0.55
      },
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-16 18:00:00'
  },
  {
      'dt': 1513458000,
      'main': {
          'temp': 287.82,
          'temp_min': 287.82,
          'temp_max': 287.82,
          'pressure': 1030.53,
          'sea_level': 1039.74,
          'grnd_level': 1030.53,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10n'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 11.07,
          'deg': 13.0035
      },
      'rain': {
          '3h': 0.41
      },
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-16 21:00:00'
  },
  {
      'dt': 1513468800,
      'main': {
          'temp': 287.715,
          'temp_min': 287.715,
          'temp_max': 287.715,
          'pressure': 1031.59,
          'sea_level': 1040.94,
          'grnd_level': 1031.59,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10d'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 10.41,
          'deg': 15.0056
      },
      'rain': {
          '3h': 0.27
      },
      'sys': {
          'pod': 'd'
      },
      'dt_txt': '2017-12-17 00:00:00'
  },
  {
      'dt': 1513479600,
      'main': {
          'temp': 287.769,
          'temp_min': 287.769,
          'temp_max': 287.769,
          'pressure': 1031.68,
          'sea_level': 1041.02,
          'grnd_level': 1031.68,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10d'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 9.77,
          'deg': 18.5017
      },
      'rain': {
          '3h': 0.22
      },
      'sys': {
          'pod': 'd'
      },
      'dt_txt': '2017-12-17 03:00:00'
  },
  {
      'dt': 1513490400,
      'main': {
          'temp': 288.031,
          'temp_min': 288.031,
          'temp_max': 288.031,
          'pressure': 1030.2,
          'sea_level': 1039.39,
          'grnd_level': 1030.2,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10d'
          }
      ],
      'clouds': {
          'all': 100
      },
      'wind': {
          'speed': 9.41,
          'deg': 21.5004
      },
      'rain': {
          '3h': 0.15
      },
      'sys': {
          'pod': 'd'
      },
      'dt_txt': '2017-12-17 06:00:00'
  },
  {
      'dt': 1513501200,
      'main': {
          'temp': 288.542,
          'temp_min': 288.542,
          'temp_max': 288.542,
          'pressure': 1029.99,
          'sea_level': 1039.24,
          'grnd_level': 1029.99,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10d'
          }
      ],
      'clouds': {
          'all': 88
      },
      'wind': {
          'speed': 9.06,
          'deg': 30.5028
      },
      'rain': {
          '3h': 0.059999999999999
      },
      'sys': {
          'pod': 'd'
      },
      'dt_txt': '2017-12-17 09:00:00'
  },
  {
      'dt': 1513512000,
      'main': {
          'temp': 289.269,
          'temp_min': 289.269,
          'temp_max': 289.269,
          'pressure': 1030.55,
          'sea_level': 1039.75,
          'grnd_level': 1030.55,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 803,
              'main': 'Clouds',
              'description': 'broken clouds',
              'icon': '04n'
          }
      ],
      'clouds': {
          'all': 80
      },
      'wind': {
          'speed': 8.81,
          'deg': 43.0027
      },
      'rain': {},
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-17 12:00:00'
  },
  {
      'dt': 1513522800,
      'main': {
          'temp': 289.621,
          'temp_min': 289.621,
          'temp_max': 289.621,
          'pressure': 1029.74,
          'sea_level': 1039.01,
          'grnd_level': 1029.74,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 804,
              'main': 'Clouds',
              'description': 'overcast clouds',
              'icon': '04n'
          }
      ],
      'clouds': {
          'all': 88
      },
      'wind': {
          'speed': 8.06,
          'deg': 52.5003
      },
      'rain': {},
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-17 15:00:00'
  },
  {
      'dt': 1513533600,
      'main': {
          'temp': 289.89,
          'temp_min': 289.89,
          'temp_max': 289.89,
          'pressure': 1028.63,
          'sea_level': 1037.89,
          'grnd_level': 1028.63,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 804,
              'main': 'Clouds',
              'description': 'overcast clouds',
              'icon': '04n'
          }
      ],
      'clouds': {
          'all': 88
      },
      'wind': {
          'speed': 7.46,
          'deg': 58.0001
      },
      'rain': {},
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-17 18:00:00'
  },
  {
      'dt': 1513544400,
      'main': {
          'temp': 290.189,
          'temp_min': 290.189,
          'temp_max': 290.189,
          'pressure': 1027.88,
          'sea_level': 1037.08,
          'grnd_level': 1027.88,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 804,
              'main': 'Clouds',
              'description': 'overcast clouds',
              'icon': '04n'
          }
      ],
      'clouds': {
          'all': 88
      },
      'wind': {
          'speed': 7.24,
          'deg': 55.0015
      },
      'rain': {},
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-17 21:00:00'
  },
  {
      'dt': 1513555200,
      'main': {
          'temp': 290.693,
          'temp_min': 290.693,
          'temp_max': 290.693,
          'pressure': 1029.1,
          'sea_level': 1038.27,
          'grnd_level': 1029.1,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 804,
              'main': 'Clouds',
              'description': 'overcast clouds',
              'icon': '04d'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 7.06,
          'deg': 56.5004
      },
      'rain': {},
      'sys': {
          'pod': 'd'
      },
      'dt_txt': '2017-12-18 00:00:00'
  },
  {
      'dt': 1513566000,
      'main': {
          'temp': 291.173,
          'temp_min': 291.173,
          'temp_max': 291.173,
          'pressure': 1029.25,
          'sea_level': 1038.41,
          'grnd_level': 1029.25,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 804,
              'main': 'Clouds',
              'description': 'overcast clouds',
              'icon': '04d'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 6.86,
          'deg': 59.0016
      },
      'rain': {},
      'sys': {
          'pod': 'd'
      },
      'dt_txt': '2017-12-18 03:00:00'
  },
  {
      'dt': 1513576800,
      'main': {
          'temp': 290.951,
          'temp_min': 290.951,
          'temp_max': 290.951,
          'pressure': 1027,
          'sea_level': 1036.13,
          'grnd_level': 1027,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10d'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 7.12,
          'deg': 54.0021
      },
      'rain': {
          '3h': 0.02
      },
      'sys': {
          'pod': 'd'
      },
      'dt_txt': '2017-12-18 06:00:00'
  },
  {
      'dt': 1513587600,
      'main': {
          'temp': 291.145,
          'temp_min': 291.145,
          'temp_max': 291.145,
          'pressure': 1026.5,
          'sea_level': 1035.72,
          'grnd_level': 1026.5,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10d'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 7.56,
          'deg': 58.5018
      },
      'rain': {
          '3h': 0.010000000000002
      },
      'sys': {
          'pod': 'd'
      },
      'dt_txt': '2017-12-18 09:00:00'
  },
  {
      'dt': 1513598400,
      'main': {
          'temp': 291.568,
          'temp_min': 291.568,
          'temp_max': 291.568,
          'pressure': 1027.63,
          'sea_level': 1036.69,
          'grnd_level': 1027.63,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10n'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 7.72,
          'deg': 63.5035
      },
      'rain': {
          '3h': 0.050000000000001
      },
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-18 12:00:00'
  },
  {
      'dt': 1513609200,
      'main': {
          'temp': 291.398,
          'temp_min': 291.398,
          'temp_max': 291.398,
          'pressure': 1027.49,
          'sea_level': 1036.62,
          'grnd_level': 1027.49,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10n'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 7.53,
          'deg': 58.5015
      },
      'rain': {
          '3h': 0.21
      },
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-18 15:00:00'
  },
  {
      'dt': 1513620000,
      'main': {
          'temp': 290.857,
          'temp_min': 290.857,
          'temp_max': 290.857,
          'pressure': 1027.02,
          'sea_level': 1036.11,
          'grnd_level': 1027.02,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10n'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 7.82,
          'deg': 47.0042
      },
      'rain': {
          '3h': 1.62
      },
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-18 18:00:00'
  },
  {
      'dt': 1513630800,
      'main': {
          'temp': 290.52,
          'temp_min': 290.52,
          'temp_max': 290.52,
          'pressure': 1027.28,
          'sea_level': 1036.4,
          'grnd_level': 1027.28,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 501,
              'main': 'Rain',
              'description': 'moderate rain',
              'icon': '10n'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 8.78,
          'deg': 36.5049
      },
      'rain': {
          '3h': 3.34
      },
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-18 21:00:00'
  },
  {
      'dt': 1513641600,
      'main': {
          'temp': 290.404,
          'temp_min': 290.404,
          'temp_max': 290.404,
          'pressure': 1029.2,
          'sea_level': 1038.34,
          'grnd_level': 1029.2,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10d'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 9.55,
          'deg': 31.0082
      },
      'rain': {
          '3h': 2.99
      },
      'sys': {
          'pod': 'd'
      },
      'dt_txt': '2017-12-19 00:00:00'
  },
  {
      'dt': 1513652400,
      'main': {
          'temp': 290.06,
          'temp_min': 290.06,
          'temp_max': 290.06,
          'pressure': 1029.96,
          'sea_level': 1039.06,
          'grnd_level': 1029.96,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10d'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 10.35,
          'deg': 23.004
      },
      'rain': {
          '3h': 1.66
      },
      'sys': {
          'pod': 'd'
      },
      'dt_txt': '2017-12-19 03:00:00'
  },
  {
      'dt': 1513663200,
      'main': {
          'temp': 289.186,
          'temp_min': 289.186,
          'temp_max': 289.186,
          'pressure': 1029.55,
          'sea_level': 1038.66,
          'grnd_level': 1029.55,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10d'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 10.66,
          'deg': 14.0027
      },
      'rain': {
          '3h': 0.9
      },
      'sys': {
          'pod': 'd'
      },
      'dt_txt': '2017-12-19 06:00:00'
  },
  {
      'dt': 1513674000,
      'main': {
          'temp': 288.9,
          'temp_min': 288.9,
          'temp_max': 288.9,
          'pressure': 1030.89,
          'sea_level': 1040.1,
          'grnd_level': 1030.89,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10d'
          }
      ],
      'clouds': {
          'all': 100
      },
      'wind': {
          'speed': 10.41,
          'deg': 17
      },
      'rain': {
          '3h': 0.34
      },
      'sys': {
          'pod': 'd'
      },
      'dt_txt': '2017-12-19 09:00:00'
  },
  {
      'dt': 1513684800,
      'main': {
          'temp': 288.569,
          'temp_min': 288.569,
          'temp_max': 288.569,
          'pressure': 1032.87,
          'sea_level': 1042.15,
          'grnd_level': 1032.87,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10n'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 11.46,
          'deg': 20.0022
      },
      'rain': {
          '3h': 0.009999999999998
      },
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-19 12:00:00'
  },
  {
      'dt': 1513695600,
      'main': {
          'temp': 288.407,
          'temp_min': 288.407,
          'temp_max': 288.407,
          'pressure': 1032.89,
          'sea_level': 1042.17,
          'grnd_level': 1032.89,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10n'
          }
      ],
      'clouds': {
          'all': 100
      },
      'wind': {
          'speed': 10.93,
          'deg': 21.5119
      },
      'rain': {
          '3h': 0.019999999999996
      },
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-19 15:00:00'
  },
  {
      'dt': 1513706400,
      'main': {
          'temp': 288.01,
          'temp_min': 288.01,
          'temp_max': 288.01,
          'pressure': 1032.49,
          'sea_level': 1041.8,
          'grnd_level': 1032.49,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10n'
          }
      ],
      'clouds': {
          'all': 92
      },
      'wind': {
          'speed': 10.99,
          'deg': 16.5015
      },
      'rain': {
          '3h': 0.080000000000005
      },
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-19 18:00:00'
  },
  {
      'dt': 1513717200,
      'main': {
          'temp': 287.574,
          'temp_min': 287.574,
          'temp_max': 287.574,
          'pressure': 1032.88,
          'sea_level': 1042.14,
          'grnd_level': 1032.88,
          'humidity': 100,
          'temp_kf': 0
      },
      'weather': [
          {
              'id': 500,
              'main': 'Rain',
              'description': 'light rain',
              'icon': '10n'
          }
      ],
      'clouds': {
          'all': 76
      },
      'wind': {
          'speed': 11.44,
          'deg': 13.5059
      },
      'rain': {
          '3h': 0.009999999999998
      },
      'sys': {
          'pod': 'n'
      },
      'dt_txt': '2017-12-19 21:00:00'
    }
],
'city': {
    'id': 1668341,
    'name': 'Taipei',
    'coord': {
        'lat': 25.0478,
        'lon': 121.5319
    },
    'country': 'TW'
  }
}

const forecastTags = [
  {
    text: 'Main', url: '#'
  },
  {
    text: 'Hourly', url: '#'
  }
]

const curDataMap = [
  ['Wind', currentWeatherAPIData.wind.speed + 'm/s,' + currentWeatherAPIData.wind.deg],
  ['Cloudiness', 'Broken clouds'],
  ['Pressure', currentWeatherAPIData.main.pressure + ' hpa'],
  ['Humidity', currentWeatherAPIData.main.humidity + ' %'],
  ['Sunrise', new Date(parseInt(currentWeatherAPIData.sys.sunrise + '000')).toString().substr(16, 5)],
  ['Sunset', new Date(parseInt(currentWeatherAPIData.sys.sunset + '000')).toString().substr(16, 5)],
  ['Coord', '[ ' + currentWeatherAPIData.coord.lat + ', ' + currentWeatherAPIData.coord.lon + ' ]']
]

const currentWeatherDOM = document.querySelector('.current-weather-container')
const foreWeatherDOM = document.querySelector('.forecast-weather-container')
const curWeatherTitle = document.createElement('h2')
const curWeatherImg = document.createElement('img')
const curWeatherTemp = document.createElement('h2')
const curWeatherDescrip = document.createElement('p')
const curWeatherTime = document.createElement('p')
const curWeatherTable = document.createElement('table')
const curTime = Date()
const foreWeatherTitle = document.createElement('h2')
const foreTagList = document.createElement('ul')
const foreWeatherSubtitle = document.createElement('h2')
const foreWeatherMainDOM = document.createElement('section')
const foreWeatherHourlyDOM = document.createElement('section')
const forWeatherTable = document.createElement('table')

curDataMap.forEach((item, index) => {
  const col = document.createElement('tr')
  const rowName = document.createElement('td')
  const rowValue = document.createElement('td')
  if (index % 2 === 0) {
    col.className = 'background-color-gray'
  }
  rowName.textContent = item[0]
  rowValue.textContent = item[1]
  col.appendChild(rowName)
  col.appendChild(rowValue)
  curWeatherTable.appendChild(col)
})

forecastTags.forEach(item => {
  const tagItem = document.createElement('li')
  const tagLink = document.createElement('a')
  tagItem.className = 'inline-block'
  tagLink.className = 'forecast-tag'
  tagLink.textContent = item.text
  tagLink.href = item.url
  tagItem.appendChild(tagLink)
  foreTagList.appendChild(tagItem)
  tagLink.addEventListener('click', showTagContent)
})

generateHourlyDateRow(forecastWeatherAPIData.list[0].dt)

forecastWeatherAPIData.list.forEach((item, index, array) => {
  const colforecast = document.createElement('tr')
  const rowTimeAndIcon = document.createElement('td')
  const rowHourlyInfo = document.createElement('td')
  const foreHour = document.createElement('span')
  const foreImg = document.createElement('img')
  const forTempAndDescrip = document.createElement('p')
  const foreTemp = document.createElement('span')
  const foreDescrip = document.createElement('em')
  const forWindCloudHpa = document.createElement('p')

  foreHour.textContent = new Date(parseInt(item.dt + '000')).toString().substr(16, 5)
  foreImg.src = 'https://openweathermap.org/img/w/' + item.weather[0].icon + '.png'
  foreImg.alt = 'weatherIcon'
  foreTemp.textContent = parseFloat(item.main.temp - 273.15, 10).toFixed(1) + ' °C'
  foreDescrip.textContent = item.weather[0].description
  forWindCloudHpa.textContent = item.wind.speed + ', m/s   ' + 'clouds: ' + item.clouds.all + '%,  ' + item.main.pressure + ' hpa'
  rowTimeAndIcon.className = 'fore-hourly-info-td width-40%'
  rowHourlyInfo.className = 'fore-hourly-info-td'
  foreTemp.className = 'forecast-temp'

  rowTimeAndIcon.appendChild(foreHour)
  rowTimeAndIcon.appendChild(foreImg)
  forTempAndDescrip.appendChild(foreTemp)
  forTempAndDescrip.appendChild(foreDescrip)
  rowHourlyInfo.appendChild(forTempAndDescrip)
  rowHourlyInfo.appendChild(forWindCloudHpa)
  colforecast.appendChild(rowTimeAndIcon)
  colforecast.appendChild(rowHourlyInfo)
  forWeatherTable.appendChild(colforecast)

  if (index < forecastWeatherAPIData.list.length - 1) {
    const currItemDate = new Date(parseInt(array[index].dt + '000')).toString().substr(8, 3)
    const nextItemDate = new Date(parseInt(array[index + 1].dt + '000')).toString().substr(8, 3)

    if (nextItemDate !== currItemDate) {
      const nextItemDT = array[index + 1].dt
      generateHourlyDateRow(nextItemDT)
    }
  }
})

function generateHourlyDateRow (date) {
  const colDate = document.createElement('tr')
  const rowDate = document.createElement('td')
  const dateWord = document.createElement('strong')
  dateWord.textContent = new Date(parseInt(date + '000')).toString().substr(0, 15) + ' Today'
  rowDate.className = 'fore-hourly-date-td'
  rowDate.colSpan = '2'
  rowDate.appendChild(dateWord)
  colDate.appendChild(rowDate)
  forWeatherTable.appendChild(colDate)
}

curWeatherTitle.className = 'current-weather-title'
curWeatherTitle.textContent = 'Weather in ' + currentWeatherAPIData.name + ',' + currentWeatherAPIData.sys.country
curWeatherImg.src = 'https://openweathermap.org/img/w/' + currentWeatherAPIData.weather[0].icon + '.png'
curWeatherImg.alt = 'weatherIcon'
curWeatherTemp.className = 'current-weather-title inline-block'
curWeatherTemp.textContent = parseInt(currentWeatherAPIData.main.temp - 273.15, 10) + '°C'
curWeatherDescrip.className = 'current-Descrip-Text'
curWeatherDescrip.textContent = currentWeatherAPIData.weather[0].description
curWeatherTime.className = 'current-Descrip-Text'
curWeatherTime.textContent = curTime.substr(16, 5) + curTime.substr(3, 7)
curWeatherTable.className = 'current-weather-table'
foreTagList.className = 'fore-tag-list'
foreWeatherTitle.textContent = 'Current weather and forecasts in your city'
foreWeatherTitle.className = 'fore-weather-title'
foreWeatherSubtitle.textContent = 'Weather and forecasts in' + currentWeatherAPIData.name + ',' + currentWeatherAPIData.sys.country
foreWeatherSubtitle.className = 'fore-weather-subtitle'
foreWeatherMainDOM.className = 'Main tag-content tag-content-show'
foreWeatherHourlyDOM.className = 'Hourly tag-content tag-content-hidden'
foreWeatherMainDOM.textContent = 'MainMainMain'

function showTagContent (eventObject) {
  const selectedTagName = eventObject.target.textContent
  const allTagSection = document.getElementsByClassName('tag-content')

  for (let i = 0; i < allTagSection.length; i++) {
    allTagSection[i].className = allTagSection[i].className.replace('tag-content-show', 'tag-content-hidden')
  }

  const a = document.getElementsByClassName(selectedTagName)
  a[0].className = a[0].className.replace('tag-content-hidden', 'tag-content-show')
}

currentWeatherDOM.appendChild(curWeatherTitle)
currentWeatherDOM.appendChild(curWeatherImg)
currentWeatherDOM.appendChild(curWeatherTemp)
currentWeatherDOM.appendChild(curWeatherDescrip)
currentWeatherDOM.appendChild(curWeatherTime)
currentWeatherDOM.appendChild(curWeatherTable)

foreWeatherHourlyDOM.appendChild(forWeatherTable)
foreWeatherDOM.appendChild(foreWeatherTitle)
foreWeatherDOM.appendChild(foreTagList)
foreWeatherDOM.appendChild(foreWeatherSubtitle)
foreWeatherDOM.appendChild(foreWeatherHourlyDOM)
foreWeatherDOM.appendChild(foreWeatherMainDOM)
