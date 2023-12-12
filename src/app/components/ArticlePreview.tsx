import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MoreDescription from './ArticleDetail/MoreDescription';

export default function DummyArticle({ params: { id } }: { params: { id: string } }) {
  console.log(id);
  return (
    <Card data-testid='dummy-article'>
      <CardHeader title='記事タイトル(dummy)' subheader='2023/12/1' />

      <CardMedia
        component='img'
        image={'https://source.unsplash.com/collection/1346951/1000x500?sig=2'}
        alt='blog image'
        width='100%'
        height='500'
      />
      <CardContent>
        <Typography variant='body1' color='text.secondary' sx={{ paddingTop: '1em' }}>
          ダミー記事です。
          <br />
          右上の「記事を書く」ボタンから新規記事を執筆してください。
        </Typography>
        <Typography variant='body1' color='text.secondary' sx={{ paddingTop: '1em' }} data-testid='dummy-article--text'>
          ※ &thinsp; 記事投稿後ダミー記事は非表示となります。
        </Typography>
        <MoreDescription />
      </CardContent>
    </Card>
  );
}
