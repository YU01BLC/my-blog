import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function DummyArticle() {
  return (
    <Card>
      <CardHeader title='記事タイトル(dummy)' subheader='2023/12/1' />
      <CardContent>
        <CardMedia component='img' height='194' image='/assets/dummy-blog-image.jpg' alt='Paella dish' />
        <Typography variant='body1' color='text.secondary' sx={{ paddingTop: '1em' }}>
          ダミー記事です。
          <br />
          右上の「記事を書く」ボタンから新規記事を執筆してください。
        </Typography>
        <Typography variant='body1' color='text.secondary' sx={{ paddingTop: '1em' }}>
          ※ &thinsp; 記事投稿後ダミー記事は非表示となります。
        </Typography>
      </CardContent>
    </Card>
  );
}
