import s from './TextPage.module.css'
import { PageTitle } from '@/components/shared'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Типографика',
  description: 'Пример текстовой страницы для тестирования типографики',
  other: { 'Cache-Control': 'public, max-age=3600, stale-while-revalidate=60' },
}

export const revalidate = 3600

export default function TextPage() {
  return (
    <>
      <PageTitle>Типографика</PageTitle>
      <h1> Архитектура приложений </h1>
      <p>
        <a href="#" title="Ссылка">
          Архитектура приложения
        </a>{' '}
        — это основа его структуры и поведения. Она включает в себя подходы и принципы,
        которые определяют, как компоненты приложения взаимодействуют друг с другом, какие
        технологии и инструменты используются, а также как обеспечивается масштабируемость
        и поддерживаемость системы. Правильная архитектура помогает избежать технического
        долга и упрощает добавление новых функций в проект.
      </p>
      <p>
        Важно, чтобы архитектура учитывала требования к производительности, безопасности,
        а также была гибкой для изменений и расширений. Хорошо спроектированное приложение
        должно обеспечивать четкое разделение ответственности, что помогает снизить
        сложности и повысить тестируемость кода.
      </p>
      <blockquote>
        <p>"Чистая архитектура — это не про технологии, а про удобство изменений."</p>
        <cite>— Роберт Мартин (Uncle Bob), автор книги "Clean Architecture"</cite>
      </blockquote>
      <h2>Основные типы архитектуры</h2>
      <p>
        При проектировании приложений часто используются несколько архитектурных
        паттернов, каждый из которых имеет свои особенности. Рассмотрим самые популярные
        из них:
      </p>
      <ol>
        <li>
          <strong>Модульная архитектура:</strong> разделяет приложение на независимые
          модули, которые могут быть легко заменены или обновлены. Это позволяет улучшить
          масштабируемость и снизить связность компонентов.
        </li>
        <li>
          <strong>Многослойная архитектура:</strong> разделяет приложение на несколько
          уровней (слоев), например, уровень представления, бизнес-логики и данных. Каждый
          слой отвечает за свою задачу, что облегчает тестирование и обслуживание.
        </li>
        <li>
          <strong>Микросервисная архитектура:</strong> приложение делится на независимые
          сервисы, каждый из которых реализует отдельную бизнес-логику. Микросервисы
          обеспечивают гибкость и масштабируемость, но требуют сложной координации.
        </li>
      </ol>
      <h2>Преимущества и недостатки многослойной архитектуры</h2>
      <p>
        Многослойная архитектура помогает организовать код таким образом, чтобы каждый
        слой был ответственен только за свою часть работы. Однако, как и любой подход, она
        имеет свои преимущества и недостатки:
      </p>
      <p>
        <strong>Преимущества:</strong>
      </p>
      <ul>
        <li>Легкость в масштабировании.</li>
        <li>Упрощенное тестирование за счет разделения логики.</li>
        <li>Обеспечивает четкое разделение задач.</li>
      </ul>
      <p>
        <strong>Недостатки:</strong>
      </p>
      <ul>
        <li>Усложнение кода при большом количестве слоев.</li>
        <li>Возможность перегрузки каждого слоя.</li>
      </ul>
      <h3>Как выбрать подходящую архитектуру?</h3>
      <p>
        При выборе архитектуры для приложения важно учитывать его требования. Например,
        если проект небольшой, то многослойная архитектура может быть избыточной. Для
        больших проектов с распределенными командами лучше подходят микросервисы, которые
        обеспечивают высокую степень изоляции и независимости компонентов.
      </p>
      <p>Основные факторы, влияющие на выбор архитектуры:</p>
      <ul>
        <li>Масштаб проекта.</li>
        <li>Требования к производительности и скорости.</li>
        <li>Количество разработчиков и их специализация.</li>
        <li>Необходимость в гибкости и быстроте изменений.</li>
      </ul>
      <h2>Современные подходы к архитектуре приложений</h2>
      <p>
        Современные подходы к архитектуре приложений часто включают использование облачных
        технологий и контейнеризации. Например, использование <strong>Docker</strong> и{' '}
        <strong>Kubernetes</strong> позволяет легко масштабировать приложения и управлять
        их развертыванием.
      </p>
      <p>
        <strong>Docker</strong> позволяет изолировать приложения в контейнерах, что
        обеспечивает их независимость от операционной системы. <strong>Kubernetes</strong>{' '}
        же управляет этими контейнерами, обеспечивая автоматическое масштабирование и
        восстановление.
      </p>
      <h3>Преимущества контейнеризации</h3>
      <p>
        Контейнеризация помогает изолировать приложение от внешней среды, что обеспечивает
        большую гибкость и безопасность. Рассмотрим основные преимущества:
      </p>
      <ol>
        <li>
          <strong>Изоляция:</strong> Каждое приложение работает в своем собственном
          контейнере.
        </li>
        <li>
          <strong>Масштабируемость:</strong> Легко добавлять новые контейнеры в
          зависимости от нагрузки.
        </li>
        <li>
          <strong>Портативность:</strong> Контейнеры могут работать на любой платформе,
          поддерживающей Docker.
        </li>
      </ol>
      <h3>Пример таблицы для сравнения архитектур</h3>
      <div className={s['table-container']}>
        <table>
          <thead>
            <tr>
              <th>Архитектура</th>
              <th>Преимущества</th>
              <th>Недостатки</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Модульная архитектура</td>
              <td>Легкость в расширении</td>
              <td>Может быть сложной для управления</td>
            </tr>
            <tr>
              <td>Многослойная архитектура</td>
              <td>Ясное разделение обязанностей</td>
              <td>Перегрузка слоев при большом объеме</td>
            </tr>
            <tr>
              <td>Микросервисы</td>
              <td>Высокая масштабируемость</td>
              <td>Сложность в координации и тестировании</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
